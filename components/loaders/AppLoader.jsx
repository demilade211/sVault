import React from 'react'
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';


const AppLoader = () => {
    return (
        <Con>
            <div className='mb-5'>
                {/* <img className='logo' src="/images/components/logo.svg" alt="img" /> */}
            </div>
            <CircularProgress color='inherit'/> 
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;      
    height: 100vh; 
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center; 
    color: rgba(255, 0, 0, 1);
`;

export default AppLoader