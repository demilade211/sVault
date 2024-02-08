'use client'

import AppLayout from '@/layouts/AppLayout';
import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedInput from '@/components/RedInput';
import RedButton from '@/components/RedButton';
import MySnackBar from '@/components/MySnackBar';
import { loginUser } from "@/services/auth"
import cookie from "js-cookie"
import catchErrors from '@/utils/catchErrors';
import validateInput from '@/utils/validateInput';

const Login = () => {

  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" })
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    const isComplete = Object.values(user).every(item => Boolean(item))//check if all is not empty
    isComplete ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.set('email', user.email);
    form.set('password', user.password);

    setButtonDisabled(true)
    setLoading(true)

    if (validateInput(user, setSnackInfo, setButtonDisabled, setLoading)) {

      try {
        const response = await loginUser(user)
        setLoading(false)
        setButtonDisabled(false)
        const { success, message } = response
        if (success) {
          cookie.set("token", response.token, { expires: 365 })
          window.location.href = "/home"
          //router.push("/home");
        } else {
          setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: message }));
          setButtonDisabled(false);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false)
        setButtonDisabled(false);
        setSnackInfo(prev => ({ ...prev, openSnack: true, type: "error", message: catchErrors(error) }))
      }
    }


  }
  const handleChange = (e) => {
    const { name, value } = e.target// takes the name and vale of event currently changing
    setUser(prev => ({ ...prev, [name]: value }))
  }

  console.log(user);

  return (
    <AppLayout>
      <Con>
        <MySnackBar setSnackInfo={setSnackInfo} snackInfo={snackInfo} />
        <div className='back-con' onClick={() => router.push(`/`)}>
          <img className='mr-3' src="/images/home/back.svg" alt="img" />
        </div>
        <HeadCon>
          <h1>Login</h1>
          <p>Login into your account</p>
        </HeadCon>
        <RedInput type="email" label="Email" onChange={handleChange} name="email" />
        <RedInput type="password" label="Password" onChange={handleChange} name="password" />
        <RedButton onClick={handleSubmit} content={`${loading ? 'loading...' : 'Login'}`} disabled={buttonDisabled} />
        <p className='forgot'>Forgot Password? <span onClick={() => router.push(`/auth/forgot`)}>Reset</span></p>
        <div className='flex justify-center mt-6'>
          <img src="/images/auth/or.png" alt="img" />
        </div>
        <GoogleDiv>
          <img src="/images/auth/google.svg" alt="img" />
          <p>Login with Google</p>
        </GoogleDiv>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 0; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  .back-con{
    width: 100%;
    display: flex; 
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
  .forgot{  
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(90, 90, 90, 1);
    margin-top: 10px;
    cursor: pointer;
    span{ 
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(255, 0, 0, 1);
    }
  }
`;

const HeadCon = styled.div`  
  width: 100%;  
  margin-bottom:20px;
  h1{
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(26, 21, 21, 1); 
    margin-bottom:10px;
  }
  p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color:rgba(167, 167, 167, 1);
  }
`;

const GoogleDiv = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid rgba(255, 0, 0, 1);
    border-radius: 40px; 
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:25px;
    cursor:pointer;
    margin-bottom:20px;
    transition: 300ms ease-in-out;

    &:hover{
      transform: scale(1.05);
    }

    img{
        margin-right:10px;
    }
    p{
        font-weight: 700;
        font-size: 12px;
        color:rgba(32, 32, 32, 1);  
    }
    
`;



export default Login