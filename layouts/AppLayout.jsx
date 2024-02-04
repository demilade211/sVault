import React from 'react'
import styled from 'styled-components'; 

const AppLayout = ({ children }) => {
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
    padding: 30px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  } 
`;

export default AppLayout