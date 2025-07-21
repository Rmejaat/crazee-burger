import { useState } from "react";
import {useNavigate } from "react-router"
import styled from "styled-components";
import { theme } from "../../../theme";
import Input from "./Input";

export default function LoginForm() {

    const [name, setName] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`order/${name}`)
    }
    return (
        <LoginFormStyle action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <Input name={name} setName={setName}/>
            <button>Accèdez à mon espace</button>
        </LoginFormStyle>
    )
}

const LoginFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 464px;
    height: 438px;
    position: relative;
    margin-top: -120px;
    h1{
        width: 310px;
        height: 61px;
        color: ${theme.colors.white};
        font-family: "Amatic SC", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 48px;
        line-height: 61px;
        margin: 72px 78px 32px 76px;
    }

    hr {
        width: 400px;
        background-color: #F56A2C;
        height: 1px;
        border: 1px solid #F56A2C;
        margin: 0 32 40 32;
    }

    h2{
        width: 171px;
        height: 46px;
        color: ${theme.colors.white};
        font-family: "Amatic SC", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 36px;
        line-height: 46px;
    }

    button{
        border: 1px solid ${theme.colors.primary_burger};
        border-radius: 5px;
        background-color: ${theme.colors.primary_burger};
        width: 400px;
        height: 53px;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 15px;
        font-weight: 700;
        font-style: normal;
        font-size: 15px;
        margin: 16px 32px 40px 32px;
    }

    button:hover, button:active {
        background-color: ${theme.colors.white} ;
        color: ${theme.colors.primary_burger};
    }

    

`