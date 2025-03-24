import axios from "axios";

export const API_GET_EXPENSES_URL="/expenseTracker/expenses";

export const getExpenses = async () => {
    try {
    return await axios.get(API_GET_EXPENSES_URL, {
      headers: {
        "Content-Type": "application/json"
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default getExpenses;