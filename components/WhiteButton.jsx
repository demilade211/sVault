'use client'

import React from 'react'
import styled from 'styled-components';

const WhiteButton = ({ content, onClick, disabled }) => {
    return (
        <>
            <Btn onClick={onClick} disabled={disabled}>{content}</Btn>
        </>
    )
}

const Btn = styled.button` 
    width: 100%;
    height: 50px; 
    color:rgba(32, 32, 32, 1);  
    border: 2px solid rgba(255, 0, 0, 1);
    border-radius: 40px; 
    font-weight: 700;
    font-size: 12px;
    margin-bottom:20px;
    transition: 300ms ease-in-out;

    &:hover{
      transform: scale(1.05);
    }

    &:disabled,
    button[disabled]{ 
      background: #ECC583;
      color:white;
    }

`;

export default WhiteButton