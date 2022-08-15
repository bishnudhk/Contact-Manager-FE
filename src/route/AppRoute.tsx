import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../component/main/UserLogin'


const AppRoute = () => {
  return (
    <Routes>
        <Route path="/login" element={<UserLogin />} />
    </Routes>
  )
}

export default AppRoute