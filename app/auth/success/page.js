'use client'

import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedButton from '@/components/RedButton';

const SignupSuccess = () => {

    const router = useRouter();

    return (
        <AppLayout>
            <Con>
                <div className='img-con'>
                    <img className='' src="/images/auth/success.png" alt="img" />
                </div>
                <h1>Card Added Sucessfully</h1>
                <p className='sub'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non arcu purus.
                </p>
                <RedButton content="Get Started" onClick={() => router.push(`/home`)} />
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%; 
  height :100% ;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  .img-con{
    display: flex;
    justify-content: center;
    margin-bottom:50px;
  }
  h1{ 
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom:20px;
    color: rgba(26, 21, 21, 1); 
  }
  .sub{ 
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(167, 167, 167, 1); 
    margin-bottom:60px;
  } 
`;

export default SignupSuccess