import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from "../component/contactForm/ContactForm";
// import ContactTable from "../component/contactTable/contactTable";
import UserLogin from "../component/login/UserLogin";
import { NavBar } from "../component/navbar/NavBar";
import UserRegister from "../component/register/UserRegister";
import HomePage from "../pages/home/HomePage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<UserLogin/>}></Route>
      <Route path="/register" element={<UserRegister />}></Route>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<HomePage />}></Route>
        <Route path="/contact/add" 
        element={<ContactForm update={false}/>}>
          
        </Route>
      
      </Route>
      
    </Routes>
  );
};

export default AppRoute;
