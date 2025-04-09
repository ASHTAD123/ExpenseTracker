import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

// export const API_DELETE_EXPENSES_URL=`${API_URL}/expenseTracker/removeExpense/`;

const API_DELETE_EXPENSES_URL = import.meta.env.PROD 
? `${import.meta.env.VITE_API_URL}/removeExpense`: "http://localhost:8080/expenseTracker/removeExpense/";


export const deleteExpenseService = async (expenseId) => {
    try {
    return await axios.delete(`${API_DELETE_EXPENSES_URL}`+`${expenseId}`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
        
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default deleteExpenseService;