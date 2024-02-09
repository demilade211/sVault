'use client'

import React, { useState, useEffect } from "react";
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, useParams } from 'next/navigation'
import { getOneAtm, getAtmWithdrawals } from '@/services/atm';
import { shortenString, hoursLeft } from "@/utils/helpers";
import ContentLoader from "@/components/loaders/ContentLoader";
import moment from "moment"
import { useDispatch, useSelector } from 'react-redux'
import MySnackBar from "@/components/MySnackBar";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const OneAtm = () => {

  const { user, status } = useSelector((state) => state.userReducer);

  const router = useRouter();
  const params = useParams()
  const { atmId } = params
  const [loading, setLoading] = React.useState(false)
  const [atm, setAtm] = React.useState({})
  const [history, setHistory] = React.useState([])
  const [snackInfo, setSnackInfo] = React.useState({ openSnack: false, type: "", message: "" })

  const { isWithin24Hours, hoursLefts } = hoursLeft(atm.createdAt)

  useEffect(() => {
    try {
      const fetchMyAtms = async () => {
        setLoading(true)
        const response = await getOneAtm(atmId)
        const response2 = await getAtmWithdrawals(atmId)
        setLoading(false)
        setAtm(response.atm)
        setHistory(response2.history)
      };
      fetchMyAtms();

    } catch (error) {
      setLoading(false)
      alert(error)
    }
  }, []); 

  console.log(history);

  return (
    <AppLayout>
      <Con>
        <MySnackBar setSnackInfo={setSnackInfo} snackInfo={snackInfo} />
        <HeadCon>
          <div className='back-con' onClick={() => router.push(`/home`)}>
            <img className='mr-3' src="/images/home/back.svg" alt="img" />
            <h1>Atm Transaction Details</h1>
          </div>
          <p>Here is the info of this  of this wallet</p>
        </HeadCon>
        {isWithin24Hours && <div className="activate-time">
          <img className='mr-3' src="/images/home/clock.svg" alt="img" />
          <p>This Machine is not yet active for withdrawal.  <span>{Math.round(hoursLefts)}H</span> remaining </p>
        </div>}
        <SummaryCon2>
          <div className="letter-con">
            <p>{atm?.beneficiaryName?.split("")[0]}</p>
          </div>
          <p className="cb-para">Current Balance</p>
          <h2>N{atm.balance}</h2>
          <div className="summ">
            <div className="row">
              <p className="left">Amount Recharged:</p>
              <p className="right bold">N{atm.amount}</p>
            </div>
            <div className="row">
              <p className="left">Link:</p>
              <CopyToClipboard
                text={`suprisevault.online/atm/withdraw/${atmId}`}
                onCopy={() => setSnackInfo(prev => ({ ...prev, openSnack: true, type: "success", message: "Link copied to clip board" }))}
              >
                <p className="right">{shortenString(`suprisevault.online/atm/withdraw/${atmId}`, 20)}<img className='ml-2' src="/images/home/copy1.svg" alt="img" /></p>
              </CopyToClipboard>
            </div>
            <div className="row">
              <p className="left">Code:</p>
              <CopyToClipboard
                text={atm.pin}
                onCopy={() => setSnackInfo(prev => ({ ...prev, openSnack: true, type: "success", message: "Link copied to clip board" }))}
              >
                <p className="right">{atm.pin}<img className='ml-2' src="/images/home/copy1.svg" alt="img" /></p>
              </CopyToClipboard>
            </div>
          </div>
        </SummaryCon2>
        <h2>Withdrawal History</h2>
        {history.length === 0 ?
          loading ? <ContentLoader />
            :
            <WithdrawalAttempt>
              <div className='left flex items-center'>
                <img className='mr-3' src="/images/home/noW.svg" alt="img" />
                <div>
                  <p className='top'>No Activities Yet on this machine</p>
                </div>
              </div>
            </WithdrawalAttempt>
          :
          history.map((val, index) => (
            <WithdrawalAttempt key={index}>
              <div className='left'>
                <img className='mr-3' src={`/images/home/${val.withdrawal_status === "wrong" ? "fail" : "suc"}.svg`} alt="img" />
                <div>
                  <p className='top'>Atm Withdrawal</p>
                  <p className='bottom'>{moment(atm.createdAt).subtract(10, 'days').calendar()}</p>
                </div>
              </div>
              <div className='right'>
                <p className='top'>-{val.amount}</p>
                <p className='bottom'>{moment(atm.createdAt).format('LT')}</p>
              </div>
            </WithdrawalAttempt>
          ))
        }
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 0;     
  h2{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(73, 73, 73, 1);
    margin-bottom:20px;
  }
  .activate-time{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    p{ 
      font-family: Poppins;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      span{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`;

const HeadCon = styled.div`  
  width: 100%;   
  margin-bottom:20px;
  .back-con{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    h1{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left; 
        color: rgba(26, 21, 21, 1); 
    }
  } 
  p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(167, 167, 167, 1);
  } 
`;

const SummaryCon = styled.div`  
  width: 100%;   
  background: rgba(255, 243, 243, 1);
  border-radius: 30px;
  padding: 40px 30px;
  margin-bottom: 40px;
  .row{ 
    .top{
      font-family: Poppins;
      font-size: 12px;
      font-weight: 700;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(26, 21, 21, 1);
      margin-bottom: 10px;
    }
    .bottom{
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(26, 21, 21, 1);
    }
    .amount{
      font-family: Poppins;
      font-size: 16px;
      font-weight: 600;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
    }
  }
`;

const SummaryCon2 = styled.div`  
  width: 100%;   
  background: rgba(255, 243, 243, 1);
  border-radius: 30px;
  padding: 40px 30px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .letter-con{
    width: 44px;
    height: 44px;
    background: rgba(255, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin-top:-60px;
    margin-bottom: 10px;
    p{
      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0em; 
      color: rgba(255, 255, 255, 1); 
    }
  }
  .cb-para{
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em; 
    color: rgba(118, 118, 118, 1);
  }
  h2{
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left; 
  }
  .summ{
    width: 100%;
    .row{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .left{
        font-family: Poppins;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em; 
        color: rgba(118, 118, 118, 1);
      }
      .right{
        font-family: Poppins;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em; 
        color: rgba(118, 118, 118, 1);
        display: flex;
        align-items: center;
      }
      .bold{
        font-weight:700;
      }
    }
  }
`;

const WithdrawalAttempt = styled.div`  
  width: 100%;   
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(222, 222, 222, 1);
  .left{
    display: flex;
    div{
        .top{
            font-family: Poppins;
            font-size: 12px;
            font-weight: 600;
            line-height: 14px;
            letter-spacing: 0em;
            text-align: left;
            margin-bottom:10px;
            color: rgba(73, 73, 73, 1);
        }
        .bottom{
            font-family: Poppins;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(197, 197, 197, 1);
        }
    }
  }
  .right{
    .top{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 0, 0, 1);
    }
    .bottom{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(197, 197, 197, 1);
    }
  }

`;

export default OneAtm