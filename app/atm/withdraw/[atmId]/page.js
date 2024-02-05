'use client'

import React, { useState } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import Pin from './subComponents/Pin';

const Atm = () => {

    const [page, setPage] = useState(0)
    const [accountInfo, setAccountInfo] = useState({
        pin:"",
        accNo:"",
        bankName:"",
        amount:""
    })
    const [otp, setOtp] = useState({
        otp: ""
    })

    const handleAtmButtons = (type)=>{
        if(page===0){
            if(type==="delete"){
                setOtp(prev=>({...prev,otp:""}))
            }else{
                if(otp.otp.length<4){
                    setOtp(prev=>({...prev,otp:prev.otp+type}))
                }
            }
            
        }

    }
    console.log(otp);

    return (
        <AppLayout>
            <Con>
                <Screen>
                    {page === 0 && <Pin setOtp={setOtp} otp={otp} accountInfo={accountInfo} setAccountInfo={setAccountInfo}/>}
                </Screen>
                <KeysCon>
                    <button className='key' onClick={()=>handleAtmButtons(1)}>
                        <p>1</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(2)}>
                        <p>2</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(3)}>
                        <p>3</p>
                    </button>
                    <button className='key red' onClick={()=>handleAtmButtons("delete")}>
                        <p>Delete</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(4)}>
                        <p>4</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(5)}>
                        <p>5</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(6)}>
                        <p>6</p>
                    </button>
                    <button className='key yellow'>
                        <p>Cancel</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(7)}>
                        <p>7</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(8)}>
                        <p>8</p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(9)}>
                        <p>9</p>
                    </button>
                    <button className='key'>
                        <p></p>
                    </button>
                    <button className='key'>
                        <p></p>
                    </button>
                    <button className='key' onClick={()=>handleAtmButtons(0)}>
                        <p>0</p>
                    </button>
                    <button className='key'>
                        <p></p>
                    </button>
                    <button className='key green'>
                        <p>Enter</p>
                    </button>
                </KeysCon>
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  height: 100%;
  padding: 40px 15px;  
  background: rgba(13, 11, 11, 1); 
`;

const Screen = styled.div`  
    width: 100%;   
    height: 266px ;
    border-radius: 20px;
    border: 2px solid rgba(58, 58, 58, 1);
    background:rgba(95, 92, 92, 0.13);
    margin-bottom: 40px;
    padding: 30px;
`;

const KeysCon = styled.div`  
    width: 100%;   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    column-gap:9px;
    row-gap: 9px;
    justify-content: center;
    .key{
        height: 54px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.13);
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            font-family: Poppins;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: rgba(255, 255, 255, 1);

        }
        &.red{ 
            background: rgba(255, 0, 0, 1); 
            p{
                color: rgba(73, 73, 73, 1);
                font-size: 14px;
            }
        }
        &.yellow{ 
            background: rgba(255, 245, 0, 1); 
            p{
                color: rgba(73, 73, 73, 1);
                font-size: 14px;
            }
        }
        &.green{
            background: rgba(0, 255, 102, 1); 
            p{
                color: rgba(73, 73, 73, 1);
                font-size: 14px;
            }
        }
    }
`;

export default Atm