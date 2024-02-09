import AppGuard from '@/guards/AppGuard';
import React from 'react'
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return (
    <Con>
      <div className='inner'>
        <AppGuard>
          {children}
        </AppGuard> 
      </div>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;   
  display: flex;
  justify-content: center;
  .inner{
    width: 500px;
    min-height: 100vh;
    padding: 0 30px; 
    @media (max-width: 511px) { 
      width: 100%; 
    }
  } 
`;

export default AppLayout