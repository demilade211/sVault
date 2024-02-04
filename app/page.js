'use client'

import RedButton from '@/components/RedButton';
import WhiteButton from '@/components/WhiteButton';
import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter,usePathname } from 'next/navigation'

const Home = () => {

  const router = useRouter();

  return (
    <AppLayout>
      <Con>
        <div className='img-con'>
          <img className='' src="/images/auth/atm.png" alt="img" />
        </div>
        <h1>Welcome to Suprisevault</h1>
        <p className='sub'>
          Dive into the world of surprises with SurpriseVault.
          The ultimate destination for thrilling, surprise-filled
          moments.
        </p>
        <p className='text'>Secure. Surprising. Simply Fun.</p>
        <RedButton content="Get Started" onClick={() => router.push(`/auth/register`)}/>
        <WhiteButton content="Login" onClick={() => router.push(`/auth/login`)}/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center; 
  .img-con{
    display: flex;
    justify-content: center;
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
    margin-bottom:20px;
  }
  .text{ 
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(45, 45, 45, 1);
    margin-bottom:40px;

  }
`;

export default Home