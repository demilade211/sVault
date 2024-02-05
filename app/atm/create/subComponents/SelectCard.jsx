'use client'

import RedButton from '@/components/RedButton';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useRouter,usePathname } from 'next/navigation'

const SelectCard = ({ setPage }) => {

    const router = useRouter();

    return (
        <Con>
            <div className='back-con' onClick={() => router.push(`/home`)}>
                <img className='mr-3' src="/images/home/back.svg" alt="img" />
                <h1>Set Amount</h1>
            </div>
            <h2>Enter Amount</h2>
            <p className='sub'>
                This amount should be the Max amount you want
                your Beneficiary to withdraw.
            </p>
            <AmountCon> 
                <p>N</p><Input type="number" placeholder="0.0000"  name="" />
            </AmountCon>

            <RedButton content="Next" onClick={() => setPage(1)} />
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
  h2{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color:rgba(73, 73, 73, 1);
    margin-bottom:10px;
  }
  .sub{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(167, 167, 167, 1);
    margin-bottom:20px;
  }
`;

const AmountCon = styled.div`
    width: 100%; 
    height: 132px; 
    padding: 20px;
    border-radius: 30px; 
    margin-bottom:20px;
    background: rgba(255, 243, 243, 1); 
    display: flex;
    justify-content:center;
    align-items: center;
    p{
        color: black; 
        font-weight: 600;
        font-size: 40px;
    }
`;

const Input = styled.input`  
    width: 50%; 
    background: rgba(255, 243, 243, 1);
    border-radius: 30px;
    color: black; 
    font-weight: 600;
    font-size: 40px; 
    outline:none;
    padding-left:4px;
    &::placeholder {
        color: var(--pure-black, #000);  
    }
`;

export default SelectCard