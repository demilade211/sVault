'use client'

import React, { useState } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import AtmSelect from '@/components/AtmSelect';

const VerifyAccount = ({setPage,accountInfo}) => {
  return (
    <Con>
      <h1>Verify Account</h1>
      <p className='sub'>Welcome to Suprisevault</p>
      <div className='summ'>
        <div className='row'>
          <p className='det'>Bank:</p>
          <p className='det'>{accountInfo.bankName}</p>
        </div>
        <div className='row'>
          <p className='det'>Account Number:</p>
          <p className='det'>{accountInfo.accNo}</p>
        </div>
        <div className='row'>
          <p className='det'>Account Name:</p>
          <p className='det'>{accountInfo.name}</p>
        </div>
      </div>
      <div className='btns'>
        <Btn className="mr-3" onClick={() => setPage(1)}>Edit</Btn>
        <Btn onClick={() => setPage(4)}>Proceed</Btn>
      </div>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;  
  height: 100%;
  padding: 40px 40px;   
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
  
  .summ{
    width: 100%;
    margin-bottom: 10px;
    .row{
      display: flex;
      justify-content: space-between;
      margin-bottom:10px;
      .det{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em; 
        color: rgba(255, 255, 255, 1); 
        text-align: left;
      }  
    }
  }
  .btns{
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Btn = styled.button` 
    width: 63px;
    height: 41px; 
    color:white;
    border: 1px solid rgba(95, 92, 92, 0.2);
    background: none;  
    border-radius: 10px; 
    font-weight: 400;
    font-size: 12px; 
    transition: 300ms ease-in-out;

    &:hover{
      transform: scale(1.05);
    }
 

`;
export default VerifyAccount