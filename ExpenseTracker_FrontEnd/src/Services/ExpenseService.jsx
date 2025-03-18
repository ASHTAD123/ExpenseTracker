import React from 'react'
import axios from "axios";
export const API_ADD_EXPENSE_URL="http://localhost:8080/expenseTracker/addExpense";

export const addExpense = (expenseDetails) => {
  
    axios.post(API_ADD_EXPENSE_URL,expenseDetails,{
        headers: {
            "Content-Type": "application/json",
          },
    })  .catch(function (error) {
        if (error.response) {
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
        }
        console.log(error.config);
      });
}

export default addExpense