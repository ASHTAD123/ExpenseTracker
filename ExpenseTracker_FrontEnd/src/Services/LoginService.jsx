import axios from "axios";

const API_LOGIN_USER_URL = import.meta.env.PROD ?  `${import.meta.env.VITE_API_URL}/expenseTracker/login` : "http://localhost:8080/expenseTracker/login";

// const API_URL = `${API_LOGIN_USER_URL}/expenseTracker/login`;
// const API_LOGIN_USER_URL = "http://localhost:8080/expenseTracker/login"

export const loginUser = async (loginDetails) => {
  try {
    return await axios.post(API_LOGIN_USER_URL, loginDetails, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
};

export default loginUser;
