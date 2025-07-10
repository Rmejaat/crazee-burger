import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/OrderPage"
import ErrorPage from "./components/pages/ErrorPage"
import { Route, Routes } from "react-router"
import { useState } from "react"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/order/:username" element={<OrderPage/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}

export default App
