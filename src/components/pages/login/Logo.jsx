import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function Logo() {
  return (
    <LogoStyle>
        <p>Crazee</p>
        <img src='/src/img/F03 logo-orange.png' alt='logo'/>
        <p>Burger</p>
    </LogoStyle>
  )
}

const LogoStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
    position: relative;

    img{
        width: 200px;
        height: 150px;
        align-self: center;
    }

    p {
        font-size: 110px;
        line-height: 115px;
        letter-spacing: 1.5px;
        font-family: "Amatic SC", sans-serif;
        font-weight: 700;
        font-style: normal;
        color: ${theme.colors.primary};
    }

`