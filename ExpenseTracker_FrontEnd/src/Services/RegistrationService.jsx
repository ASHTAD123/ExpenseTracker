
import axios from "axios";
export const API_REGISTER_USER_URL ="http://localhost:8080/expenseTracker/register";

export const registerUser = async (registrationDetails) => {
  try {
    return await axios.post(API_REGISTER_USER_URL, registrationDetails, {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,// Important: Ensures cookies are sent with the request
      },
    });
 
  } catch (error) {

    return await Promise.reject(error);
  }
}

export default registerUser;
