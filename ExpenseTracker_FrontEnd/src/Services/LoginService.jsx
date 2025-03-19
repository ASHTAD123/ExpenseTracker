import axios from "axios";

const API_LOGIN_USER_URL = "http://localhost:8080/expenseTracker/login";

export const loginUser = async(loginDetails)=>{

    try{
        return await axios.post(API_LOGIN_USER_URL,loginDetails,{
            headers:{
                "Content-Type":"application/json",
            },
        });
    }catch(error){
        return await Promise.reject(error);
}
}
export default loginUser;