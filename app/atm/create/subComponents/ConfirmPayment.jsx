'use client'

import RedButton from '@/components/RedButton';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Backdrop from '@mui/material/Backdrop';
import { makeRecurringPayment, initialize } from '@/services/payment'
import CircularProgress from '@mui/material/CircularProgress';
import { calculateTransactionFee } from '@/utils/helpers'

const ConfirmPayment = ({ setPage, atmInfo }) => {

  const { transactionFee, withdrawalAmount } = calculateTransactionFee(atmInfo.amount);
  const { user, status } = useSelector((state) => state.userReducer);

  const router = useRouter();
  const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" })
  const [active, setActive] = useState({
    email: "",
    authorization: {

    }
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isComplete = active.email !== "" && active.authorization.authorization_code !== ""//check if all is not empty
    isComplete ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [active])

  const handlePayment = async () => {
    setLoading(true)
    let response = await initialize({...atmInfo,amount:withdrawalAmount + 1000})
    if (response.success) {
      setLoading(false)
      router.push(response.authorization_url)
    } else if (!response.success) {
      setLoading(false)
      alert(response.message)
    }
  }

  const handleCardCharge = async () => {
    setLoading(true)
    let response = await makeRecurringPayment(withdrawalAmount + 1000, active.email, active.authorization.authorization_code, atmInfo)
    if (response.success) {
      if (response.data.paused) {
        router.push(response.data.authorization_url)
      } else {
        setLoading(false) 
        setSnackInfo((prev) => ({ ...prev, openSnack: true,type:"success", message: "Card Charged Successfully" }))
        window.location.href = "/home" 
      }
    } else if (!response.success) {
      setLoading(false)
      alert(response.message)
    }
  }

  return (
    <Con>
      <Backdrop
        sx={{ color: "rgba(255, 0, 0, 1)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <MySnackBar setSnackInfo={setSnackInfo} snackInfo={snackInfo} />
      <div className='back-con' onClick={() => setPage(1)}>
        <img className='mr-3' src="/images/home/back.svg" alt="img" />
        <h1>Verify Charges</h1>
      </div>
      <CostSummaryCon>
        <div className='row flex justify-between'>
          <p className='name'>Amount Recharged</p>
          <p className='price'>N{atmInfo.amount}</p>
        </div>
        <div className='row flex justify-between'>
          <p className='name'>Service Charge</p>
          <p className='price'>N1,000.00</p>
        </div>
        <div className='row flex justify-between'>
          <p className='name'>Card Charge</p>
          <p className='price'>N{transactionFee}</p>
        </div>
        <div className='row flex justify-between'>
          <p className='name'>Total</p>
          <p className='price'>N{withdrawalAmount + 1000}</p>
        </div>
      </CostSummaryCon>
      {user.authorizations.lenghth !== 0 &&
        <SavedCardCon>
          <h1>Saved Card</h1>
          {user.authorizations.map((item, index) => (
            <Card
              key={index}
              className={`${active.authorization.authorization_code === item.authorization.authorization_code && "active"}`}
              onClick={() => {
                setActive((prev) => ({ ...prev, email: item.email, authorization: item.authorization }));
              }}
            >
              <div className='left'>
                <img className='mr-3' src="/images/home/card.svg" alt="img" />
                <div>
                  <p className='mb-2'>{item.authorization.brand.charAt(0).toUpperCase() + item.authorization.brand.slice(1)} XXXX-{item.authorization.last4}
                  </p>
                  <p>Exp: {item.authorization.exp_month}/{item.authorization.exp_year}</p>
                </div>
              </div>
              <div className='right'>
                <img className='mr-4' src="/images/home/mastercard.svg" alt="img" />
                {active.authorization.authorization_code === item.authorization.authorization_code ?
                  <img className='' src="/images/home/red.svg" alt="img" />
                  :
                  <img className='' src="/images/home/nred.svg" alt="img" />
                }
              </div>
            </Card>
          ))}
        </SavedCardCon>
      }
      <NewCardCon>
        <h1>Add a New card or Payment Option</h1>
        <Card onClick={handlePayment}>
          <div className='left'>
            <img className='mr-5' src="/images/home/card.svg" alt="img" />
            <h3>Add a new Card</h3>
          </div>
        </Card>
      </NewCardCon>
      <NoteCon>
        <h3>Note</h3>
        <p>The virtual atm you are about to create will be available for withdrawal after <span className='bold'>24hrs</span>   </p>
      </NoteCon>
      <RedButton content="Pay Now" disabled={buttonDisabled} onClick={handleCardCharge} />
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;  
  padding: 20px 0;  
  .back-con{
    display: flex;
    align-items: center;
    margin-bottom:30px;
    cursor: pointer;
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
`;

const CostSummaryCon = styled.div`  
  width: 100%;   
  background: rgba(255, 243, 243, 1);
  border-radius: 30px;
  padding: 30px 20px;
  margin-bottom: 20px;
  .row{
    margin-bottom: 20px;
    .name{
      font-family: Poppins;
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(26, 21, 21, 1);
    }
    .price{
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(26, 21, 21, 1);
    }
  }
`;

const SavedCardCon = styled.div`  
  width: 100%;   
  h1{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left; 
    color: rgba(73, 73, 73, 1); 
    margin-bottom:10px;
  }  
`;

const Card = styled.div`  
  width: 100%;  
  display:flex ;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid rgba(189, 189, 189, 1);
  border-radius: 20px;
  margin-bottom: 10px;
  .left{
    display: flex;
    align-items: center;
    div{
      p{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: left; 
        color: rgba(73, 73, 73, 1);
      }
    }
    h3{
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(73, 73, 73, 1);
    }
  }
  .right{
    display: flex;
    align-items: center;
  }
  &.active{
    border: 1px solid rgba(255, 0, 0, 1)
  }
`;

const NewCardCon = styled.div`  
  width: 100%;  
  padding: 20px 0;  
  h1{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left; 
    color: rgba(73, 73, 73, 1); 
    margin-bottom:10px;
  }  
`;

const NoteCon = styled.div`
  width:100%;  
  padding: 20px;
  background: rgba(255, 243, 243, 1);
  margin-bottom:20px;
  h3{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color:rgba(255, 0, 0, 1); 
    margin-bottom:10px;
  } 
  p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left; 
    color: rgba(118, 118, 118, 1);
    .cancel{
      font-style:italic;
      text-decoration: line-through;
    }
    .bold{
      font-weight:700;
    }
  }
`;

export default ConfirmPayment