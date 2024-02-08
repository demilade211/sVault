'use client'

import React, { useState } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import SelectCard from './subComponents/SelectCard';
import AddAtmInfo from './subComponents/AddAtmInfo';
import ConfirmPayment from './subComponents/ConfirmPayment';

const Create = () => {

    const [page, setPage] = useState(0)
    const [atmInfo, setAtmInfo] = useState({
        amount:"",
        beneficiaryName:"",
        pin:"",
        customMessage:"",
        referedBy:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target// takes the name and vale of event currently changing
        setAtmInfo(prev => ({ ...prev, [name]: value }))
      }


      console.log(atmInfo);

      
    return (
        <AppLayout>
            <Con>
                {page === 0 && <SelectCard setPage={setPage} setAtmInfo={setAtmInfo} atmInfo={atmInfo} handleChange={handleChange}/>}
                {page === 1 && <AddAtmInfo setPage={setPage} setAtmInfo={setAtmInfo} atmInfo={atmInfo} handleChange={handleChange}/>}
                {page === 2 && <ConfirmPayment setPage={setPage} setAtmInfo={setAtmInfo} atmInfo={atmInfo}/>}
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 5px; 
`;

export default Create