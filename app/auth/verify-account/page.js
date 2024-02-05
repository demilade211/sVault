'use client'

import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedInput from '@/components/RedInput';
import RedButton from '@/components/RedButton';
import OtpInput from 'react-otp-input';

const VerifyAccount = () => {

    const router = useRouter();
    const [otp, setOtp] = useState({
        otp: ""
    })

    const handleChange = (otp) => setOtp(prev => ({ ...prev, otp }));


    return (
        <AppLayout>
            <Con>
                <div className='back-con' onClick={() => router.push(`/auth/register`)}>
                    <img className='mr-3' src="/images/home/back.svg" alt="img" />
                </div>
                <HeadCon>
                    <h1>Verify your email</h1>
                    <p>
                        Please enter the 5 digit code sent to
                        ex****e@gmail.com
                    </p>
                </HeadCon>
                <div className='flex justify-center'>
                    <OtpInput
                        value={otp.otp}
                        onChange={handleChange}
                        numInputs={5}
                        placeholder=''
                        inputStyle={{
                            width: "100%",
                            height: "64px",
                            background: "rgba(255, 234, 234, 1)",
                            border: "1px solid rgba(255, 0, 0, 1)",
                            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                            borderRadius: "20px",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "black",
                            marginRight: "8px",
                            padding: "8px",
                            outline: "none"
                        }}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={{ marginBottom: "30px" }}
                    />
                </div>
                <RedButton content="Verify & Proceed" onClick={() => router.push(`/auth/success`)} />
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

export default VerifyAccount