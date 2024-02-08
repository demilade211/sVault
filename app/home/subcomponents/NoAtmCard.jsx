'use client'

import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const NoAtmCard = () => {
  const router = useRouter();
  return (
    <NoAtm>
      <img className='' src="/images/home/noatm.svg" alt="img" />
      <p>Create a Virtual Atm</p>
      <SmallBtn onClick={() => router.push(`/atm/create`)}>Create</SmallBtn>
    </NoAtm>
  )
}

const NoAtm = styled.div`  
    width: 100%;   
    border-radius:20px;
    margin-bottom:20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: rgba(255, 243, 243, 1); 
    p{
      font-family: Poppins;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0em; 
      color: rgba(255, 0, 0, 1);
    }
`;

const SmallBtn = styled.button`  
    height: 40px; 
    color:white;
    background: rgba(255, 0, 0, 1); 
    box-shadow: 0px 20px 30px 0px rgba(69, 125, 88, 0.35); 
    border-radius: 40px; 
    font-weight: 700;
    font-size: 12px; 
    transition: 300ms ease-in-out;
    padding: 10px;
    &:hover{
      transform: scale(1.05);
    }

    &:disabled,
    button[disabled]{ 
      background: #ECC583;
      color:white;
    }

`;

export default NoAtmCard