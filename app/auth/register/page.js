'use client'

import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedInput from '@/components/RedInput';
import RedButton from '@/components/RedButton';

const Register = () => {

  const router = useRouter();

  return (
    <AppLayout>
      <Con>
        <div className='back-con' onClick={() => router.push(`/`)}>
          <img className='mr-3' src="/images/home/back.svg" alt="img" />
        </div>
        <HeadCon>
          <h1>Step 1/2</h1>
          <p>Create Account</p>
        </HeadCon>
        <RedInput type="text" label="Full name" />
        <RedInput type="email" label="Email" />
        <RedInput type="password" label="Password" />
        <RedInput type="password" label="Confirm Password" />
        <div className='flex justify-center mt-6'>
          <img src="/images/auth/or.png" alt="img" />
        </div>
        <GoogleDiv>
          <img src="/images/auth/google.svg" alt="img" />
          <p>Signup with Google</p>
        </GoogleDiv>
        <RedButton content="Proceed" onClick={() => router.push(`/auth/verify-account`)} />
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
`;

const HeadCon = styled.div`  
  width: 100%;  
  margin-bottom:20px;
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

const GoogleDiv = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid rgba(255, 0, 0, 1);
    border-radius: 40px; 
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:25px;
    cursor:pointer;
    margin-bottom:20px;
    transition: 300ms ease-in-out;

    &:hover{
      transform: scale(1.05);
    }

    img{
        margin-right:10px;
    }
    p{
        font-weight: 700;
        font-size: 12px;
        color:rgba(32, 32, 32, 1);  
    }
    
`;

export default Register