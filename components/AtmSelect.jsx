import React from 'react'
import styled from 'styled-components';
import { selectStyle } from "@/utils/customStyles"
import Select from 'react-select'

const AtmSelect = ({label,options,onChange,value}) => {
    return (
        <InputLabelCon>
            <Label>{label}</Label>
            <Select options={options} styles={selectStyle} value={value} onChange={onChange} placeholder="Select an option" />
        </InputLabelCon>
    )
}

const InputLabelCon = styled.div`
    margin-bottom:30px;
`;

const GreyInput = styled.input`
    width:100%;
    max-width:327px;
    height:48px;
    background: rgba(224, 226, 231, 0.41);
    border-radius: 8px;
    color: #99A0AE;
    font-weight: 400;
    font-size: 16px;
    padding:15px;
    outline:none
`;

const Label = styled.div`
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom:10px;
`;

export default AtmSelect