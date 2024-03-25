'use client'

import AppLayout from '@/layouts/AppLayout';
import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedInput from '@/components/RedInput';
import RedButton from '@/components/RedButton';
import CalculatorResult from '@/components/modals/CalculatorResult';
import {calculateCompatibility} from '@/utils/helpers'

const Calculator = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [loading, setLoading] = useState(false)
    const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" })
    const [user, setUser] = useState({
        firstName: "",
        secondName: "",
    })
    const [calculatorResult, setCalculatorResult] = useState({
        show: false,
        message: ""
    });

    useEffect(() => {
        const isComplete = Object.values(user).every(item => Boolean(item))//check if all is not empty
        isComplete ? setButtonDisabled(false) : setButtonDisabled(true)
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target// takes the name and vale of event currently changing
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        setCalculatorResult(prev=>({...prev,show:true}))
    }

    const handleCalculatorResult = () => setCalculatorResult((prev) => ({ ...prev, show: false }));

    let conc = user.firstName+user.secondName

    return (
        <AppLayout>
            <Con>
                <CalculatorResult mOpen={calculatorResult.show} handleModClose={handleCalculatorResult} res={calculateCompatibility(conc.trim())}/>
                <HeadCon>
                    <h1>Name Compatibility</h1>
                    <p>Check compatibility based on names</p>
                </HeadCon>
                <RedInput type="text" label="First Name" onChange={handleChange} name="firstName" value={user.firstName}/>
                <RedInput type="text" label="Second Name" onChange={handleChange} name="secondName" value={user.secondName}/>
                <RedButton content="Calculate" onClick={handleSubmit} disabled={buttonDisabled}/>
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

export default Calculator