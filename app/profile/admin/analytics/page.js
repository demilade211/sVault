'use client'

import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment"

const Analytics = () => {

    const router = useRouter();
    const { user, admin } = useSelector((state) => state.userReducer);
    const [atms, setAtms] = useState([])
    const [users, setUsers] = useState([])

    //const trimmedText = product.description.slice(0, 25);

    console.log(admin);

    return (
        <AppLayout>
            <Con>
                <div className='back-con' onClick={() => router.push(`/profile`)}>
                    <img className='mr-3' src="/images/home/back.svg" alt="img" />
                    <h1>Analytics</h1>
                </div>
                <div className='summ'>
                    <div className='top'>
                        <div>
                            <p className='light-para'>Total Sign Ups</p>
                            <p className='bold-para'>{admin?.userCount}</p>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='stat-con'>
                            <div>
                                <p className='light-para'>Attempted Atm Creation</p>
                                <p className='bold-para'>{admin?.attemptedAtmsCount}</p>
                            </div>
                        </div>
                        <div className='stat-con'>
                            <div>
                                <p className='light-para'>Succesfull Atm creation</p>
                                <p className='bold-para green'>{admin?.fundedAtmsCount}</p>
                            </div>
                        </div>
                        <div className='stat-con'>
                            <div>
                                <p className='light-para'>Failed Atm Creation</p>
                                <p className='bold-para red'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Recent Account Sign up</h2>
                {
                    admin?.recentUsers.map((val, index) => (
                        <DetList key={index}>
                            <div className='left'>
                                <img className='mr-3' src="/images/home/mail.svg" alt="img" />
                                <div>
                                    <p className='top'>{val.email.slice(0, 20)}...</p>
                                    <p className='bottom'>11|02|2024</p>
                                </div>
                            </div>
                            <div className='right'>
                                <p className='bottom'>02:33PM</p>
                            </div>
                        </DetList>
                    ))
                }
                <h2>Recent Atm Created</h2>
                {
                    admin?.recentAtms.map((val, index) => (
                        <DetList key={index}>
                            <div className='left'>
                                <img className='mr-4' src="/images/home/atms.svg" alt="img" />
                                <div>
                                    <p className='top'>NGN{val.amount}</p>
                                    <p className='bottom'>{val.customMessage.slice(0, 20)}...</p>
                                </div>
                            </div>
                            <div className='right'>
                                <p className={`top ${val.isFunded?"green":"red"}`}>{val.isFunded?"Funded":"Not-funded"}</p>
                                <p className='bottom'>02:33PM</p>
                            </div>
                        </DetList>
                    ))
                }
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 5px;  
  h2{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(73, 73, 73, 1);
    margin:30px;
  }
  .back-con{
    width: 100%;
    display: grid; 
    grid-template-columns:1fr 1fr 1fr;
    align-items: center;
    margin-bottom:30px;
    cursor: pointer;
    h1{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center; 
        color: rgba(26, 21, 21, 1); 
    }
  }
  .summ{
    width: 100%; 
    background:rgba(255, 243, 243, 1);
    border-radius:30px;
    padding: 20px; 
    .light-para{
        font-family: Poppins;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em; 
        color:rgba(118, 118, 118, 1);
        text-align: center;
        margin-bottom:5px;

    }
    .top{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        .bold-para{
            font-family: Poppins;
            font-size: 30px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: 0em; 
            color: rgba(0, 0, 0, 1);
            text-align: center;
            margin-bottom:10px;
        }
    }
    .bottom{
        width: 100%;
        display: flex;
        gap: 10px;
        .stat-con{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 76px;
            border: 1px solid rgba(255, 255, 255, 1);
            border-radius:10px;
            .bold-para{
                font-family: Poppins;
                font-size: 25px;
                font-weight: 700;
                line-height: 36px;
                letter-spacing: 0em; 
                color: rgba(0, 0, 0, 1);
                text-align: center; 
            }
            .green{
                color: rgba(0, 255, 102, 1);
            }
            .red{
                color: rgba(255, 0, 0, 1);
            }
        }
    }
  }
`;

const DetList = styled.div`  
  width: 100%;   
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(222, 222, 222, 1);
  .left{
    display: flex;
    div{
        .top{
            font-family: Poppins;
            font-size: 12px;
            font-weight: 600;
            line-height: 14px;
            letter-spacing: 0em;
            text-align: left;
            margin-bottom:5px;
            color: rgba(73, 73, 73, 1);
        }
        .bottom{
            font-family: Poppins;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(197, 197, 197, 1);
        }
    }
  }
  .right{
    .top{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left; 
    }
    .green{
        color: rgba(0, 255, 102, 1);
    }
    .red{
        color: rgba(255, 0, 0, 1);
    }
    .bottom{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(197, 197, 197, 1);
    }
  }

`;

export default Analytics