'use client'

import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedInput from '@/components/RedInput';
import RedButton from '@/components/RedButton';

const Forgot = () => {

    const router = useRouter();

    return (
        <AppLayout>
            <Con>
                <div className='back-con' onClick={() => router.push(`/`)}>
                    <img className='mr-3' src="/images/home/back.svg" alt="img" />
                </div>
                <HeadCon>
                    <h1>Reset your Password</h1>
                    <p>
                        Please confirm the email associated with your
                        account to receive a verification code
                        b****@gmail.com
                    </p>
                </HeadCon>
                <RedInput type="email" label="Email" />
                <RedButton content="Confirm" onClick={() => router.push(`/auth/verify-token`)} />
                <p className='forgot'>Remembered your Password? <span>Login</span></p>
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 0; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  .back-con{
    width: 100%;
    display: flex; 
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
  .forgot{  
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(90, 90, 90, 1);
    margin-top: 10px;
    span{ 
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(255, 0, 0, 1);
    }
  }
`;

const HeadCon = styled.div`  
  width: 100%;  
  margin-bottom:20px;
  padding: 0 20px;
  h1{
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(26, 21, 21, 1); 
    margin-bottom:10px;
  }
  p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color:rgba(167, 167, 167, 1);
  }
`;


export default Forgot