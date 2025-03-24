import axios from "axios";

export const API_UPDATE_EXPENSE_URL="/expenseTracker/updateExpense/";

export const updateExpense = async (modifiedProduct,expenseId) => {

  console.log("INSIDE UPDATE EXPENSE SERVICE");
  console.log("URL : "+ `${API_UPDATE_EXPENSE_URL}`+`${expenseId}`);
  
    try {
    return await axios.post(`${API_UPDATE_EXPENSE_URL}`+`${expenseId}`, modifiedProduct,{
      headers: {
        "Content-Type": "application/json"
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default updateExpense;