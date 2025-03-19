import React from 'react'
import axios from "axios";
export const API_ADD_EXPENSE_URL="http://localhost:8080/expenseTracker/addExpense";

export const addExpense = async (expenseDetails) => {
  
  
    try {
    return await axios.post(API_ADD_EXPENSE_URL, expenseDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return await Promise.reject(error);
  }
}

export default addExpense;