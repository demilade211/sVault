'use client'

import React, { useState } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import AtmSelect from '@/components/AtmSelect';
import PleaseWait from './PleaseWait';

const Bank = ({ setAccountInfo, accountInfo, loading,banks }) => {

  const handleSelect = (val) => setAccountInfo(prev => ({ ...prev, bankCode: val.value,bankName:val.label }));

  return (
    <>
      {
        loading ?
          <PleaseWait />
          :
          <Con>
            <h1>Good day</h1>
            <p className='sub'>Input Bank name to be Credited</p>
            <p className='info'>Bank  Name</p>
            <AtmSelect onChange={handleSelect} options={banks.map(bank => ({ value: bank.code, label: bank.name }))} selected={accountInfo.bankCode} />
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

export default Bank