'use client'

import React from 'react'
import styled from 'styled-components';

const RedButton = ({ content, onClick, disabled }) => {
    return (
        <>
            <Btn onClick={onClick} disabled={disabled}>{content}</Btn>
        </>
    )
}

const Btn = styled.button` 
    width: 100%;
    height: 50px; 
    color:white;
    background: rgba(255, 0, 0, 1); 
    box-shadow: 0px 20px 30px 0px rgba(69, 125, 88, 0.35); 
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
      background:  #ff6666;
      color:white;
    }

`;

export default RedButton