'use client'

import React, { useState } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import PleaseWait from './PleaseWait';

const Pin = ({ setOtp, otp, loading }) => {



  const handleChange = (otp) => setOtp(prev => ({ ...prev, otp }));
  return (
    <>
      {loading ? <PleaseWait />
        :
        <Con>
          <h1>Hi Dayor</h1>
          <p className='sub'>Welcome to Suprisevault</p>
          <p className='info'>Input Your four digits pin to continue</p>
          <div className='flex justify-center'>
            <OtpInput
              value={otp.otp}
              onChange={handleChange}
              numInputs={4}
              inputStyle={{
                width: "41px",
                height: "41px",
                background: "rgba(255, 255, 255, 0.12)",
                border: "none",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "10px",
                fontWeight: "400",
                fontSize: "20px",
                color: "white",
                marginRight: "8px",
                padding: "8px",
                outline: "none"
              }}
              renderInput={(props) => <input {...props} />}
              containerStyle={{ marginBottom: "30px" }}
            />
          </div>
          <p className='instruction'>Press <span>Enter</span> to continue</p>
        </Con>
      }
    </>
  )
}

const Con = styled.div`  
  width: 100%;  
  height: 100%;
  padding: 40px 15px;   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em; 
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
  }
  .sub{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em; 
    color: rgba(167, 167, 167, 1);
    margin-bottom: 40px;
  }
  .info{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em; 
    color: rgba(255, 255, 255, 1);
    margin-bottom: 30px;
  }
  .instruction{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em; 
    color: rgba(167, 167, 167, 1);
    span{
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em; 
        color: rgba(255, 255, 255, 1);
    }
  }
`;

export default Pin