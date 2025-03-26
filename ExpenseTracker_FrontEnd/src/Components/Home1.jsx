import React from "react";
import Table from "react-bootstrap/Table";
import getExpenses from "../Services/GetExpensesService";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import deleteUserExpense from "../Services/DeleteService";
import backgroundImage from "../assets/bg.jpg";
import SearchExpense from "./SearchExpense";


const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses()
      .then((res) => {
        setExpenses(res.data);
        console.log(res.data);
        setExpenses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute", // Ensure full coverage
        left: 0,
        top: 0,
      }}
    >
      <div className="container mt-3">
        
        <div className="row">
          
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">All Expenses</div>
              <div className="card-body"></div>

              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Date</th>
                    <th>Expense Name</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expenses, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{expenses.date}</td>
                      <td>{expenses.expenseName}</td>
                      <td>{expenses.description}</td>
                      <td>{expenses.amount}</td>
                      <td>
                        <Link
                          to={"updateExpense/" + expenses.expenseId}
                          className="btn btn-sm btn-primary"
                        >
                          Edit{" "}
                        </Link>

                        <button
                          onClick={() => deleteUserExpense(expenses.expenseId)}
                          className="btn btn-sm btn-danger ms-3"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
