'use client'

import React, { useState } from 'react'
import RedButton from '@/components/RedButton';
import WhiteButton from '@/components/WhiteButton';
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import Slide1 from './subComponents/Slide1';
import Slide2 from './subComponents/Slide2';
import Slide3 from './subComponents/Slide3';

const Home = () => {

  const router = useRouter();
  const [page, setPage] = useState(0)

  return (
    <AppLayout>
      <Con>
        {page === 0 && <Slide1 setPage={setPage} />}
        {page === 1 && <Slide2 setPage={setPage} />}
        {page === 2 && <Slide3 setPage={setPage} />}
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;  
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  .info-con{
    padding: 20px;
    background:rgba(255, 243, 243, 1);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    margin-bottom: 30px;
    .img-con{
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }
    h1{ 
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom:20px;
      color: rgba(255, 0, 0, 1); 
    }
    .sub{ 
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(167, 167, 167, 1); 
      margin-bottom:20px;
    } 
  }
`;

export default Home