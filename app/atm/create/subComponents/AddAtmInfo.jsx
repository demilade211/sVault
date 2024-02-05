'use client'

import RedInput from '@/components/RedInput';
import React, { useState } from 'react'
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import RedButton from '@/components/RedButton';

const AddAtmInfo = ({ setPage }) => {
  const [otp, setOtp] = useState({
    otp: ""
  })

  const handleChange = (otp) => setOtp(prev => ({ ...prev, otp }));

  return (
    <Con>
      <div className='back-con' onClick={() => setPage(0)}>
        <img className='mr-3' src="/images/home/back.svg" alt="img" />
        <h1>Beneficiary Details</h1>
      </div>
      <RedInput type="text" label="Beneficiary Name" />
      <h2>Add a Pin</h2>
      <p className='sub'>
        Input a Pin the beneficiary will use to access the
        created virtual machine.
      </p>
      <div className='flex justify-center'>
        <OtpInput
          value={otp.otp}
          onChange={handleChange}
          numInputs={4}
          placeholder='0000'
          inputStyle={{
            width: "100%",
            height: "64px",
            background: "white",
            border: "1px solid rgba(255, 0, 0, 1)",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            borderRadius: "20px",
            fontWeight: "400",
            fontSize: "32px",
            color: "black",
            marginRight: "8px",
            padding: "8px",
            outline: "none"
          }}
          renderInput={(props) => <input {...props} />}
          containerStyle={{ marginBottom: "30px" }}
        />
      </div>
      <h2>Custom Message</h2>
      <p className='sub'>
        Write a message you want delivered to your Bene-
        ficiary
      </p>
      <RedTextArea type="textarea" ></RedTextArea>
      <NoteCon>
        <h3>Note</h3>
        <p>A Charge fee of <span className='cancel'>NGN2,050.00</span> <span className='bold'>NGN1,050.00</span>  Will
          be added to the amount recharged</p>
      </NoteCon>
      <RedButton content="Next" onClick={() => setPage(2)} />
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

const RedTextArea = styled.textarea`
  width:100%; 
  height:132px; 
  border-radius:30px;
  border: 1px solid rgba(255, 0, 0, 1);
  color: black;
  font-weight: 400;
  font-size: 16px;
  padding:15px;
  outline:none;
  margin-bottom:20px;
`;

const NoteCon = styled.div`
  width:100%;  
  padding: 20px;
  background: rgba(255, 243, 243, 1);
  margin-bottom:20px;
  h3{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color:rgba(255, 0, 0, 1); 
    margin-bottom:10px;
  } 
  p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left; 
    color: rgba(118, 118, 118, 1);
    .cancel{
      font-style:italic;
      text-decoration: line-through;
    }
    .bold{
      font-weight:700;
    }
  }
`;

export default AddAtmInfo