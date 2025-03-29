
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const API_REGISTER_USER_URL =`${API_URL}expenseTracker/register`;

export const registerUser = async (registrationDetails) => {
  try {
    return await axios.post(API_REGISTER_USER_URL, registrationDetails, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      }
    });
 
  } catch (error) {

    return await Promise.reject(error);
  }
}

export default registerUser;
