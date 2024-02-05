'use client'

import React, { useState } from 'react'
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import SelectCard from './subComponents/SelectCard';
import AddAtmInfo from './subComponents/AddAtmInfo';
import ConfirmPayment from './subComponents/ConfirmPayment';

const Create = () => {

    const [page, setPage] = useState(0)

    return (
        <AppLayout>
            <Con>
                {page === 0 && <SelectCard setPage={setPage} />}
                {page === 1 && <AddAtmInfo setPage={setPage} />}
                {page === 2 && <ConfirmPayment setPage={setPage} />}
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 5px;  
`;

export default Create