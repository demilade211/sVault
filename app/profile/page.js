'use client'

import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import cookie from "js-cookie"

const Profile = () => {

  const { user, status } = useSelector((state) => state.userReducer);

  const router = useRouter();

  const logOut = () => {
    window.location.href = "/auth/login" 
    cookie.remove("token");
    router.refresh()
 
  }

  return (
    <AppLayout>
      <Con>
        <div className='back-con' onClick={() => router.push(`/home`)}>
          <img className='mr-3' src="/images/home/back.svg" alt="img" />
          <SmallBtn onClick={logOut}>Log Out</SmallBtn>
        </div>
        <SummaryCon2>
          <div className="letter-con">
            <p>{user.name.split(" ")[0].split("")[0]}</p>
          </div>
          <p className="cb-para">HI, {user?.name?.split(" ")[0]}</p>
        </SummaryCon2>
        <Row>
          <div className='head'>
            <p>Profile</p>
            <img className='' src="/images/home/edit.svg" alt="img" />
          </div>
          <div className='row top'>
            <p className='title'>Full Name</p>
            <p className='value'>{user.name}</p>
          </div>
          <div className='row bottom'>
            <p className='title'>Email</p>
            <p className='value'>{user.email}</p>
          </div>
        </Row>
        <Row>
          <div className='head'>
            <p>Support</p>
          </div>
          <div className='row top'>
            <p className='title'>Email</p>
            <p className='value'>tulenoreply@gmail.com</p>
          </div>
          <div className='row bottom'>
            <p className='title'>Instagram</p>
            <p className='value'>@tualehq</p>
          </div>
        </Row>
        <Row>
          <div className='head'>
            <p>Legal</p>
          </div>
          <div className='row top'>
            <p className='title'><img className='mr-3' src="/images/home/info.svg" alt="img" />Terms of Service</p> 
          </div>
          <div className='row bottom'>
            <p className='title'><img className='mr-3' src="/images/home/info.svg" alt="img" />Privacy Policy</p> 
          </div>
        </Row>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 5px;  
  .back-con{
    width: 100%;
    display: flex;
    justify-content: space-between;
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

const SummaryCon2 = styled.div`  
  width: 100%;   
  background: rgba(255, 243, 243, 1);
  border-radius: 30px;
  padding: 20px 30px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .letter-con{
    width: 90px;
    height: 90px;
    background: rgba(255, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin-top:-80px;
    margin-bottom: 10px;
    p{
      font-family: Poppins;
      font-size: 42px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0em; 
      color: rgba(255, 255, 255, 1); 
    }
  } 
  h2{
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em; 
  } 
`;

const Row = styled.div`  
  width:100% ;
  margin-bottom: 20px;
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    p{
      font-family: Poppins;
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0em;
      color: rgba(73, 73, 73, 1);

    }
  }
  .row{
    width: 100%;
    height: 45px;  
    background: rgba(255, 243, 243, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 4px;
    .title{
      font-family: Poppins;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0em; 
      color: rgba(13, 12, 12, 1);
      display: flex;
      align-items: center;
    }
    .value{
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em; 
      color: rgba(118, 118, 118, 1);
    }
    &.top{
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    &.bottom{
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

`;

export default Profile