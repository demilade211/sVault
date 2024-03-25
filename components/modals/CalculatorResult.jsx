'use client'
import React, { useContext, useState, useRef, useEffect } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import RedButton from '../RedButton';
import { StyledTab, StyledTabs, BorderLinearProgress } from "@/utils/customStyles"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "321px",
    height: "auto",
    maxHeight: "500px",
    bgcolor: 'background.paper',
    borderRadius: "30px",
    outline: "none",
    padding: "20px",
    overflowY: "scroll",
    '@media (max-width: 500px)': {
        width: "90%",
    },
};


const CalculatorResult = ({ mOpen, handleModClose,res }) => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                const nextProgress = prevProgress + 1;
                return nextProgress >= res ? res : nextProgress;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [res]);

    const handleSubmit = (e) => {
        handleModClose()
        setProgress(0)
    }

    return (
        <Modal
            open={mOpen} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <ModCon>
                    <h1>Number of Trials(0)</h1>
                    <h2>{progress}%</h2>
                    <p>Compatible</p>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center',marginBottom:"20px" }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <BorderLinearProgress variant="determinate"
                                value={progress}
                                sx={{
                                    height: 10,
                                    borderRadius: 5,
                                }}
                            />
                        </Box> 
                    </Box>
                    <RedButton content="Try Again" onClick={handleSubmit} />
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
    h2{
      font-family: Poppins;
      font-size: 40px;
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
    }
`;

export default CalculatorResult