import LoginForm from "./LoginForm"

export default function LoginPage({name, setName}) {

  return (
    <div>
      <LoginForm name={name} setName={setName} />
    </div>
  )
}