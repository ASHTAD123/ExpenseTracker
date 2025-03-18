import React from "react";
import { useState } from "react";
import addExpense from "../Services/ExpenseService";

const AddExpense = () => {
  const [expenseDetails, setExpenseDetails] = useState({
    expenseName: "",
    amount: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setExpenseDetails({ ...expenseDetails, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expenseDetails);
    addExpense(expenseDetails)
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="">
          <div className="card">
            <div className="card-header fs-5 text-center">Add Expense</div>
            <div className="card-body">
              <form>
                <div className="mb">
                  <label htmlFor="expenseName">Expense Name</label>
                  <input
                    type="text"
                    name="expenseName"
                    className="form-control"
                    placeholder="Expense Name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    className="form-control"
                    placeholder="Enter amount"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="start"
                    name="date"
                    value="2018-07-22"
                    min="2018-01-01"
                    max="2018-12-31"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="de">Description</label>
                  <br></br>
                  <textarea
                    id="w3review"
                    name="description"
                    rows="4"
                    cols="50"
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
