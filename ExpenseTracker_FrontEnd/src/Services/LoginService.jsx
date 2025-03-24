import axios from "axios";

const API_LOGIN_USER_URL = '/expenseTracker/login';

export const loginUser = async(loginDetails)=>{

    try{
        return await axios.post(API_LOGIN_USER_URL,loginDetails,{
               "Content-Type": "application/json" // Make sure you're sending JSON
        });
    }catch(error){
        return await Promise.reject(error);
}
}
export default loginUser;