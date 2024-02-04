import React from 'react'
import styled from 'styled-components';

const RedInput = ({ label, placeholder, type, onChange, name, value }) => {
    return (
        <InputLabelCon>
            <Label>{label}</Label>
            <GreyInput type={type} placeholder={placeholder} onChange={onChange} name={name} value={value && value} />
        </InputLabelCon>
    )
}

const InputLabelCon = styled.div`
    width: 100%;
    margin-bottom:20px;
`;

const GreyInput = styled.input`
    width:100%; 
    height:50px;
    background: rgba(255, 197, 197, 0.37); 
    border-radius: 30px;
    color: rgba(118, 118, 118, 1); 
    font-weight: 400;
    font-size: 14px;
    padding:15px;
    outline:none
`;

const Label = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: rgba(0, 0, 0, 1); 
    margin-bottom:10px
`;

export default RedInput