'use client'

import AppLayout from '@/layouts/AppLayout';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const Main = () => {

    const router = useRouter();

    return (
        <AppLayout>
            <Con>
                <HeadCon>
                    <h1>Welcome Afo</h1>
                    <p>Log Into Account</p>
                </HeadCon>
                <CreateCon>
                    <div className='img-con flex justify-center'>
                        <img className='' src="/images/home/smallatm.png" alt="img" />
                    </div>
                    <h2>Create a Virtual Atm</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac pulvinar velit, malesuada volutpat </p>
                    <Btn>Create</Btn>
                </CreateCon>
                <AtmsCon>
                    <h2>My Virtual ATM Machines</h2>
                    <p className='sub1'>Recent Transactions </p>
                    <Atms> 
                        <div>
                            <h3>Dayor</h3>
                            <p className='sub2'>suprisevault.com/atm0081TV</p>
                        </div>
                        <SmallBtn>Monitor</SmallBtn>
                    </Atms>
                    <Atms> 
                        <div>
                            <h3>Funke</h3>
                            <p className='sub2'>suprisevault.com/atm0081TV</p>
                        </div>
                        <SmallBtn>Monitor</SmallBtn>
                    </Atms>
                </AtmsCon>
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  padding: 40px 5px; 
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const HeadCon = styled.div`  
  width: 100%;  
  margin-bottom:30px;
  h1{
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em; 
    color: rgba(26, 21, 21, 1); 
    margin-bottom:10px;
  }
  p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em; 
    color:rgba(167, 167, 167, 1);
  }
`;

const CreateCon = styled.div`  
    width: 100%;  
    border-radius: 30px;
    background: rgba(255, 243, 243, 1); 
    padding: 10px 20px;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-bottom:20px;
    h2{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
        margin:15px 0;
    }
    p{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom:20px;

    }
`;

const Btn = styled.button` 
    width: 178px;
    height: 50px; 
    color:white;
    background: rgba(255, 0, 0, 1); 
    box-shadow: 0px 20px 30px 0px rgba(69, 125, 88, 0.35); 
    border-radius: 40px; 
    font-weight: 700;
    font-size: 12px;
    margin-bottom:20px;
    transition: 300ms ease-in-out;

    &:hover{
      transform: scale(1.05);
    }

    &:disabled,
    button[disabled]{ 
      background: #ECC583;
      color:white;
    }

`;

const AtmsCon = styled.div`  
    width: 100%;    
    h2{
        font-family: Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left; 
        margin:15px 0;
    }
    .sub1{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: left; 
        margin-bottom:20px;

    }
`;

const Atms = styled.div`  
    width: 100%;   
    border-radius:20px;
    margin-bottom:20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: rgba(255, 243, 243, 1); 
    div{
        h3{
            font-family: Poppins;
            font-size: 12px;
            font-weight: 600;
            line-height: 14px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(255, 0, 0, 1); 
            margin-bottom:5px; 
        }
        .sub2{
            font-family: Poppins;
            font-size: 10px;
            font-weight: 400;
            line-height: 12px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(118, 118, 118, 1);  

        }
    }
`;

const SmallBtn = styled.button`  
    height: 40px; 
    color:white;
    background: rgba(255, 0, 0, 1); 
    box-shadow: 0px 20px 30px 0px rgba(69, 125, 88, 0.35); 
    border-radius: 40px; 
    font-weight: 700;
    font-size: 12px; 
    transition: 300ms ease-in-out;
    padding: 10px;
    &:hover{
      transform: scale(1.05);
    }

    &:disabled,
    button[disabled]{ 
      background: #ECC583;
      color:white;
    }

`;

export default Main