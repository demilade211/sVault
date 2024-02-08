import React from 'react'
import styled from 'styled-components';

const AtmLayout = ({children}) => {
  return (
    <Con>
      <div className='inner'>
        {children}
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
    @media (max-width: 511px) { 
      width: 100%; 
    }
  } 
`;

export default AtmLayout