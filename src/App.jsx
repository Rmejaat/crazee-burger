import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/OrderPage"
import ErrorPage from "./components/pages/ErrorPage"
import { Route, Routes } from "react-router"
import { useState } from "react"

function App() {

  const [name, setName] = useState("")

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage name={name} setName={setName} />} />
      <Route path="/order" element={<OrderPage name={name} setName={setName} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}

export default App
