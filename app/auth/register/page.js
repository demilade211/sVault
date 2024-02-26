'use client'

import React, { useState, useEffect, useContext } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedInput from '@/components/RedInput';
import RedButton from '@/components/RedButton';
import MySnackBar from '@/components/MySnackBar';
import { sendOtp } from "@/services/auth"
import cookie from "js-cookie"
import catchErrors from "@/utils/catchErrors"
import validateInput from '@/utils/validateInput';

const Register = () => {

  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" })
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptsTerms: false
  })

  useEffect(() => {
    const isComplete = Object.values(user).every(item => Boolean(item))//check if all is not empty
    isComplete ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonDisabled(true)
    setLoading(true)

    if (validateInput(user, setSnackInfo, setButtonDisabled, setLoading)) {
      cookie.set("userData", JSON.stringify(user), { expires: 1 })

      try {
        let res = await sendOtp({ email: user.email.toLowerCase() })
        const { success, message } = res
        if (success === true) {
          router.push('/auth/verify-account')
        } else {
          setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: message }));
          setButtonDisabled(false);
          setLoading(false);
        }
      } catch (error) {
        setButtonDisabled(false);
        setLoading(false);
        setSnackInfo(prev => ({ ...prev, openSnack: true, type: "error", message: catchErrors(error) }))
      }
    }


  }

  const handleChange = (e) => {
    const { name, value } = e.target// takes the name and vale of event currently changing
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const handleCheck = (e) => {
    setUser(prev => ({ ...prev, acceptsTerms: !prev.acceptsTerms }))
  }

  return (
    <AppLayout>
      <Con>
        <MySnackBar setSnackInfo={setSnackInfo} snackInfo={snackInfo} />
        <div className='back-con' onClick={() => router.push(`/`)}>
          <img className='mr-3' src="/images/home/back.svg" alt="img" />
        </div>
        <HeadCon>
          <h1>Step 1/2</h1>
          <p>Create Account</p>
        </HeadCon>
        <RedInput type="text" label="Full name" onChange={handleChange} name="name" />
        <RedInput type="email" label="Email" onChange={handleChange} name="email" />
        <RedInput type="password" label="Password" onChange={handleChange} name="password" />
        <RedInput type="password" label="Confirm Password" onChange={handleChange} name="confirmPassword" />
        <AgreementCon>
          <input type='checkbox' onChange={handleCheck} />
          <p>By signing up on suprise vault, you agree our <span>terms of service </span>and <span>privacy policies.</span></p>
        </AgreementCon>
        <RedButton onClick={handleSubmit} content={`${loading ? 'loading...' : 'Proceed'}`} disabled={buttonDisabled} />
        <div className='flex justify-center mt-6'>
          <img src="/images/auth/or.png" alt="img" />
        </div>
        <GoogleDiv>
          <img src="/images/auth/google.svg" alt="img" />
          <p>Signup with Google</p>
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

const AgreementCon = styled.div`
    font-weight: 400;
    font-size: 12px; 
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    input{
        margin-top:-17px
    }
    p{
        margin-left:10px;
        span{
            color:rgba(255, 0, 0, 1);
            cursor: pointer
        }
    }
`;

export default Register