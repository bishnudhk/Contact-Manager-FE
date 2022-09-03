import axios from "axios";

import User from "../domain/user";
import { LoginDetail } from "../domain/user";
// axios.defaults.baseURL = "http://localhost:5001";
// axios.defaults.baseURL = "http://"

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
    const res = await axios.post("http://localhost:5001/register", user);
    return res;
  };


  //Login user 
  export const loginUser = async (LoginDetail: LoginDetail) => {
    const res = await axios.post("http://localhost:5001/login",LoginDetail);
    return res;
  };


  // Get all contacts 
  export const getAllContact = async () => {
    const config = getConfig();
    const response = await axios.get("http://localhost:5001/contact",config);
    const { data } = await response.data;
    return data;
  };  


  // Get contact by id

  export const getContactById = async (id: number) => {
    const config = getConfig();
    const response = await axios.get(`http://localhost:5001/contact/${id}`,config);
    return response;
  };
  
  // Add new contact 

  export const addContact = async (contact: any) => {
    console.log("contact",contact);
    const config = getConfig();
    const response = await axios.post("http://localhost:5001/contact/add",contact,config);
    return response;
  };

  // Update Contact 

  export const updateContact = async (contact:any, id:string) => {
    const config  = getConfig();
    const response = await axios.put(`http://localhost:5001/contact/${id}`,contact,config);
    return response;
  };

  // delete 
  export const deleteContact = async (id: string) => {
    const config = getConfig();
    const response = await axios.delete(`http://localhost:5001/contact/${id}`,config);
    return response;
  };

  // authUser 

  export const authUser = async () => {
    const config = getConfig();
    const response = await axios.get("http://localhost:5001/authenticate",config);
    return response;
  };