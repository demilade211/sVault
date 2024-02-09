'use client'

import React, { useState } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import PleaseWait from './PleaseWait';

const Amount = ({ accountInfo, setAccountInfo, loading }) => {
  const handleChange = (e) => {
    const { name, value } = e.target// takes the name and vale of event currently changing
    setAccountInfo(prev => ({ ...prev, [name]: value }))
  }
  return (
    <>
      {
        loading ?
          <PleaseWait />
          :
          <Con>
            <h1>Withdraw Cash To Account</h1>
            <p className='sub'>Enter Amount to Withdraw</p>
            <p className='info'>Here comes the mystery</p>
            <GreyInput type="text" placeholder="N0.00" value={accountInfo.amount} name="amount" onChange={handleChange} />
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
    margin-bottom: 30px;
  }
  .info{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em; 
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
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

const GreyInput = styled.input`
    width:197px; 
    height:41px;
    background: rgba(255, 255, 255, 0.12); 
    border-radius: 10px;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    font-size: 16px;
    padding:15px;
    outline:none;
    margin-bottom:20px;
`;

export default Amount