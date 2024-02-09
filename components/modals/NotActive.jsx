'use client'

import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "321px",
  height: "auto",
  bgcolor: 'background.paper',
  borderRadius: "30px",
  outline: "none",
  padding: "20px",
  '@media (max-width: 500px)': {
    width: "90%",
  },
};

const NotActive = ({name,mOpen,hoursLeft}) => {
  return (
    <Modal
      open={mOpen} 
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModCon>
          <h1>Hi {name},</h1>
          <p>Please be patient we know you can't wait to unlock your suprise you have <span>{Math.round(hoursLeft)}H left</span></p> 
        </ModCon>

      </Box>
    </Modal>
  )
}

const ModCon = styled.div`
    width:100%; 
    display:flex;
    flex-direction:column;
    justify-content:center; 
    align-items:center; 
    margin-bottom:20px;
    h1{
      font-family: Poppins;
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0em; 
      color: rgba(26, 21, 21, 1);
      margin-bottom:20px;

    }
    p{ 
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: center; 
      color: rgba(167, 167, 167, 1);
      margin-bottom: 30px;
      span{
        font-weight: 700;
      }
    }
`;

export default NotActive