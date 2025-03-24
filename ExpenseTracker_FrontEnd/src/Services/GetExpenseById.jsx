import axios from "axios";



export const API_FIND_EXPENSE_URL=`/expenseTracker/`;

export const findExpense = async (expenseId) => {
    try {
      console.log("INSIDE FIND EXPENSE");
      
      console.log("URL : "+ `${API_FIND_EXPENSE_URL}`+`${expenseId}`);
      
    return await axios.get(`${API_FIND_EXPENSE_URL}`+`${expenseId}`, {
      headers: {
        "Content-Type": "application/json"
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default findExpense;