import axios from "axios";

export const API_GET_EXPENSES_URL="http://localhost:8080/expenseTracker/expenses";

export const getExpenses = async () => {
    try {
    return await axios.get(API_GET_EXPENSES_URL, {
      headers: {
        withCredentials: true,// Important: Ensures cookies are sent with the request
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default getExpenses;