import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { BsPersonCircle } from "react-icons/bs";

export default function Input({name, setName}) {
  return (
    <InputStyle>
        <BsPersonCircle className='icon' />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Entrez votre prénom" required/>
    </InputStyle>
  )
}

const InputStyle = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    width: 400px;
        height: 55px;

.icon {
    width: 15;
height: 15;


    position: absolute;
    left: 16px;
    font-size: 24px;
    color: ${theme.colors.greyDark};
    pointer-events: none;
  }


    input {
        width: 400px;
        height: 55px;
        border: solid ${theme.colors.white};
        border-radius: 5px;
        padding-left: 48px;
        margin: 16 32 0 32;
    }
`
