import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../component/login/UserLogin'
import UserRegister from '../component/register/UserRegister'


const AppRoute = () => {
  return (
    <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister/>} />
    </Routes>
  )
}

export default AppRoute