import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "./Logo"

export default function LoginPage() {

  return (
    <LoginPageStyle>
      <Logo/>
      <LoginForm/>
    </LoginPageStyle>
  )
}

const LoginPageStyle = styled.div`
  background-image: url("/src/img//F03 burger-background.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`