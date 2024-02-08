import React from 'react'
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const ContentLoader = () => {
    return (
        <Con> 
            <CircularProgress color='inherit' />
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;       
    display: flex; 
    align-items:center;
    justify-content: center; 
    color: rgba(255, 0, 0, 1);
`;

export default ContentLoader