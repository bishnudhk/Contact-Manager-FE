import axios from "axios";

import User from "../domain/user";
import { LoginDetail } from "../domain/user";

export const getConfig = () =>{
    const accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    return config; 
}

export const registerUser = async (user: User) => {
    const res = await axios.post("/register", user);
    return res;
  };
  