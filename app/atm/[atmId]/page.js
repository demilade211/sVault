'use client'

import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const OneAtm = () => {

    const router = useRouter();

    return (
        <AppLayout>
            <Con>
                <HeadCon>
                    <div className='back-con' onClick={() => router.push(`/home`)}>
                        <img className='mr-3' src="/images/home/back.svg" alt="img" />
                        <h1>Atm Transaction Details</h1>
                    </div>
                    <p>Here is the info of this  of this wallet</p>
                </HeadCon>
                <SummaryCon>
                    <div className='row flex justify-between items-center mb-8'>
                        <div>
                            <p className='top'>Link:</p>
                            <p className='bottom'>suprisevault.com/atm0081TV</p>
                        </div>
                        <div>
                            <p className='top'>Code:</p>
                            <p className='bottom'>1234</p>
                        </div>
                    </div>
                    <div className='row flex justify-between items-center'>
                        <div>
                            <p className='top'>Amount Recharged</p>
                            <p className='amount'>N50,000.00</p>
                        </div>
                        <div>
                            <p className='top'>Current Balance</p>
                            <p className='amount'>N35,000.00</p>
                        </div>
                    </div>
                </SummaryCon>
                <h2>Withdrawal History</h2>
                {[{ status: "failed" }, { status: "success" }].map((val,index) => (
                    <WithdrawalAttempt key={index}>
                        <div className='left'>
                            <img className='mr-3' src={`/images/home/${val.status==="failed"?"fail":"suc"}.svg`} alt="img" />
                            <div>
                                <p className='top'>Atm Withdrawal</p>
                                <p className='bottom'>01-02-2024</p>
                            </div>
                        </div>
                        <div className='right'>
                            <p className='top'>-10,000</p>
                            <p className='bottom'>02:00PM</p>
                        </div>
                    </WithdrawalAttempt>
                ))}
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
`;

const HeadCon = styled.div`  
  width: 100%;   
  margin-bottom:30px;
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