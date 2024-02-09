'use client'

import React, { useState, useEffect } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import Pin from './subComponents/Pin';
import AccountNumber from './subComponents/AccountNumber';
import Bank from './subComponents/Bank';
import VerifyAccount from './subComponents/VerifyAccount';
import Amount from './subComponents/Amount';
import Withdrawn from './subComponents/Withdrawn';
import Insufficient from './subComponents/Insufficient';
import PleaseWait from './subComponents/PleaseWait';
import AtmLayout from '@/layouts/AtmLayout';
import { checkPin, getBanks,getAccDet,withdraw } from "@/services/atm"
import { useRouter, useParams } from 'next/navigation'
import MySnackBar from '@/components/MySnackBar';
import catchErrors from '@/utils/catchErrors';

const Atm = () => {

    const params = useParams()
    const { atmId } = params
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" })
    const [banks, setBanks] = useState([]);
    const [otp, setOtp] = useState({
        otp: ""
    })
    const [accountInfo, setAccountInfo] = useState({
        pin: otp,
        accNo: "",
        bankCode: "",
        bankName:"",
        amount: "",
        recipient_code:"",
        name:""
    })


    useEffect(() => {
        const getBankss = async () => {
            try {
                setLoading(true)
                const res = await getBanks()
                setLoading(false)
                setBanks(res.banks);
            } catch (error) {
                setLoading(false)
                setSnackInfo(prev => ({ ...prev, openSnack: true, type: "error", message: catchErrors(error) }))
            }
        }
        getBankss();
    }, [])

    const handleCheckPin = async () => {
        setLoading(true)
        try {
            let res = await checkPin(atmId, { pin: otp.otp })
            setLoading(false);
            const { success, message } = res
            if (success === true) {
                return success
            } else {
                setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: message }));
                return success
            }
        } catch (error) {
            setLoading(false);
            setSnackInfo(prev => ({ ...prev, openSnack: true, type: "error", message: catchErrors(error) }))
        }
    }

    const validateAccount = async (e) => {
        setLoading(true)


        try {
            let res = await getAccDet({accountNumber:accountInfo.accNo,bankCode:accountInfo.bankCode})
            setLoading(false)
            const { success, message } = res 
            setAccountInfo((prev)=>({...prev,recipient_code:res.recipient_code,name:res.reciepient.name}))
            if (success === true) {
                return success
            } else {
                setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: message })); 
                setLoading(false);
                return success
                
            }
        } catch (error) {  
            setLoading(false);
            setSnackInfo(prev => ({ ...prev, openSnack: true, type: "error", message: catchErrors(error) }))
        }
    }

    const withdrawCash = async (e) => {
        setLoading(true) 

        try {
            let res = await withdraw(atmId,{amount:accountInfo.amount,recipient_code:accountInfo.recipient_code})
            setLoading(false)
            const { success, message } = res  
            if (success === true) {
                return success
            } else {
                setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: message })); 
                setLoading(false);
                return success
                
            }
        } catch (error) {  
            setLoading(false);
            setSnackInfo(prev => ({ ...prev, openSnack: true, type: "error", message: catchErrors(error) }))
        }
    }

    const handleAtmButtons = async (type) => {
        if (page === 0) {
            if (type === "delete") {
                setOtp(prev => ({ ...prev, otp: "" }))
            } else if (type === "enter") {
                if (otp.otp.length === 4) {
                    await handleCheckPin() && setPage(1)
                }
            } else {
                if (otp.otp.length < 4) {
                    setOtp(prev => ({ ...prev, otp: prev.otp + type }))
                }
            }

        }
        if (page === 1) {
            if (type === "delete") {
                setAccountInfo(prev => ({ ...prev, accNo: "" }))
            } else if (type === "enter") {
                if (accountInfo.accNo.length > 5) {
                    setPage(2)
                }
            } else {
                setAccountInfo(prev => ({ ...prev, accNo: prev.accNo + type }))
            }

        }

        if (page === 2) {
            if (type === "enter") {
                if (accountInfo.bankCode.length > 0) {
                    await validateAccount()&&setPage(3)
                }
            }

        }

        if (page === 4) {
            if (type === "delete") {
                setAccountInfo(prev => ({ ...prev, amount: "" }))
            } else if (type === "enter") {
                if (accountInfo.amount.length > 2) {
                    await withdrawCash()?setPage(5):setPage(6)
                }
            } else {
                setAccountInfo(prev => ({ ...prev, amount: prev.amount + type }))
            }

        }

    }

    console.log(accountInfo);

    return (
        <AtmLayout>
            <Con>
                <MySnackBar setSnackInfo={setSnackInfo} snackInfo={snackInfo} />
                <Screen>
                    {(page === 0 && <Pin setOtp={setOtp} otp={otp} accountInfo={accountInfo} setAccountInfo={setAccountInfo} loading={loading} />)}
                    {page === 1 && <AccountNumber accountInfo={accountInfo} setAccountInfo={setAccountInfo} loading={loading} />}
                    {page === 2 && <Bank accountInfo={accountInfo} setAccountInfo={setAccountInfo} loading={loading} banks={banks} />}
                    {page === 3 && <VerifyAccount accountInfo={accountInfo} setAccountInfo={setAccountInfo} setPage={setPage} loading={loading} />}
                    {page === 4 && <Amount accountInfo={accountInfo} setAccountInfo={setAccountInfo} loading={loading} />}
                    {page === 5 && <Withdrawn accountInfo={accountInfo} setAccountInfo={setAccountInfo} setPage={setPage} loading={loading} />}
                    {page === 6 && <Insufficient accountInfo={accountInfo} setAccountInfo={setAccountInfo} setPage={setPage} loading={loading} />}
                </Screen>
                <KeysCon>
                    <button className='key' onClick={() => handleAtmButtons(1)}>
                        <p>1</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(2)}>
                        <p>2</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(3)}>
                        <p>3</p>
                    </button>
                    <button className='key red' onClick={() => handleAtmButtons("delete")}>
                        <p>Delete</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(4)}>
                        <p>4</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(5)}>
                        <p>5</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(6)}>
                        <p>6</p>
                    </button>
                    <button className='key yellow'>
                        <p>Cancel</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(7)}>
                        <p>7</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(8)}>
                        <p>8</p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(9)}>
                        <p>9</p>
                    </button>
                    <button className='key'>
                        <p></p>
                    </button>
                    <button className='key'>
                        <p></p>
                    </button>
                    <button className='key' onClick={() => handleAtmButtons(0)}>
                        <p>0</p>
                    </button>
                    <button className='key'>
                        <p></p>
                    </button>
                    <button className='key green' onClick={() => handleAtmButtons("enter")}>
                        <p>Enter</p>
                    </button>
                </KeysCon>
            </Con>
        </AtmLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  height: 100%;
  padding: 40px 15px;  
  background: rgba(13, 11, 11, 1);  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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