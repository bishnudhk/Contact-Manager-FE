import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ContactForm from "../component/contactForm/ContactForm";
// import ContactTable from "../component/contactTable/contactTable";
import UserLogin from "../component/login/UserLogin";
import { NavBar } from "../component/navbar/NavBar";
import UserRegister from "../component/register/UserRegister";
import HomePage from "../pages/home/HomePage";
import AdminRoute from "./adminRoutes";

const AppRoute = () => {
  // const navigation = useNavigate();
  // var isLoggedIn = localStorage.getItem("isLoggedIn");
  // useEffect(() =>{
  //   if(isLoggedIn !== "true"){
  //     navigation({pathname:"/login"});
  //   }
  // },[isLoggedIn])

  //  const isUserLoggedIn = () => {
    // return JSON.parse(localStorage.getItem("isLoggedIn") as string);
  // };

  return (
    <Routes>
      {/* <Route
        path="/login"
        element={isUserLoggedIn() ? <Navigate to="/login" /> : <UserLogin/>}
      ></Route> */}
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/register" element={<UserRegister />}></Route>
      <Route path="/" element={<AdminRoute />}>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<HomePage />}></Route>
          <Route
            path="/contact/add"
            element={<ContactForm update={false} />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoute;
