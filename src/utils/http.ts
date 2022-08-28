import axios from "axios";

import User from "../domain/user";
import { LoginDetail } from "../domain/user";
axios.defaults.baseURL = "http://localhost:5001";

export const getConfig = () =>{
    const accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    return config; 
}

// create a new user 

export const registerUser = async (user: User) => {
  console.log(user);
    const res = await axios.post("/register", user);
    return res;
  };


  //Login user 
  export const loginUser = async (LoginDetail: LoginDetail) => {
    const res = await axios.post("/login",LoginDetail);
    return res;
  };


  // Get all contacts 
  export const getAllContact = async () => {
    const config = getConfig();
    const response = await axios.get("/contact",config);
    const { data } = await response.data;
    return data;
  };  


  // Get contact by id

  export const getContactById = async (id: number) => {
    const config = getConfig();
    const response = await axios.get(`/contact/${id}`,config);
    return response;
  };
  
  // Add new contact 

  export const addContact = async (contact: any) => {
    const config = getConfig();
    const response = await axios.post("/contact/add",contact,config);
    return response;
  };

  // Update Contact 

  export const updateContact = async (contact:any, id:string) => {
    const config  = getConfig();
    const response = await axios.put(`/contact/${id}`,contact,config);
    return response;
  };

  // delete 
  export const deleteContact = async (id: string) => {
    const config = getConfig();
    const response = await axios.delete(`/contact/${id}`,config);
    return response;
  };

  // authUser 

  export const authUser = async () => {
    const config = getConfig();
    const response = await axios.get("/authenticate",config);
    return response;
  };