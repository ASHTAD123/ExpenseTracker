import axios from "axios";

const API_LOGOUT_USER_URL = "http://localhost:8080/expenseTracker/logout";

export const logoutUser = async() =>{

    
    try{
        return await axios.post(API_LOGOUT_USER_URL,{
            headers:{
                "Content-Type":"application/json",
            },
        });
    }catch(error){
        return await Promise.reject(error);
}
}
export default logoutUser;