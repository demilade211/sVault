'use client'

import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import RedButton from '@/components/RedButton';

const AtmCreatedSuccess = () => {

  const router = useRouter();

  return (
    <AppLayout>
      <Con>
        <div className='img-con'>
          <img className='' src="/images/auth/success.png" alt="img" />
        </div>
        <h1>Virtual ATM Created Sucessfully</h1>
        <p className='sub'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non arcu purus.
        </p>
        <CopyCon>
          <p className='label'>Unique link ID</p>
          <div className='copy-row'>
            <p className='left'>suprisevault.com/atm00875421TV</p>
            <img className='' src="/images/home/copy.svg" alt="img" />
          </div>
        </CopyCon>
        <CopyCon>
          <p className='label'>Pin</p>
          <div className='copy-row'>
            <p className='left'>0000</p>
            <img className='' src="/images/home/copy.svg" alt="img" />
          </div>
        </CopyCon>
        <RedButton content="Share Details" onClick={() => router.push(`/home`)} />
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%; 
  height :100% ;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  .img-con{
    display: flex;
    justify-content: center;
    margin-bottom:50px;
  }
  h1{ 
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom:20px;
    color: rgba(26, 21, 21, 1); 
  }
  .sub{ 
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(167, 167, 167, 1); 
    margin-bottom:60px;
  } 
`;

const CopyCon = styled.div`  
  width: 100%;  
  margin-bottom:20px;
  .label{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 20px;
  }
  .copy-row{
    width: 100%; 
    height: 50px;
    background: rgba(255, 197, 197, 0.37); 
    padding:15px;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    .left{
        color: rgba(118, 118, 118, 1); 
        font-weight: 400;
        font-size: 14px;
    }
  }
`;

export default AtmCreatedSuccess