import axios from "axios";

export const API_DELETE_EXPENSES_URL="/expenseTracker/removeExpense/";

export const deleteExpenseService = async (expenseId) => {
    try {
    return await axios.delete(`${API_DELETE_EXPENSES_URL}`+`${expenseId}`, {
      headers: {
        "Content-Type": "application/json"
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default deleteExpenseService;