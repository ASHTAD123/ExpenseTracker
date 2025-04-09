import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;
// export const API_GET_EXPENSES_URL=`${API_URL}/expenseTracker/expenses`;
const API_GET_EXPENSES_URL = import.meta.env.PROD ? `${import.meta.env.VITE_API_URL}/expenseTracker/expenses` :"http://localhost:8080/expenseTracker/expenses";
export const getExpenses = async () => {
    try {
    return await axios.get(API_GET_EXPENSES_URL, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default getExpenses;