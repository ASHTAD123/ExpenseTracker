import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import getExpenses from "../Services/GetExpensesService";
import { Link } from "react-router-dom";
import deleteUserExpense from "../Services/DeleteService";
import Form from "react-bootstrap/Form";
import fetchResults from "../Services/SearchExpenseService";
import Navigationbar from "../Components/Navbar";
import bg from '../assets/bg.jpg'

const SearchExpense = () => {
  
  const [query, setQueryParam] = useState("");
  const [results, setQueryResults] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses()
      .then((res) => {
        setExpenses(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = async (e) => {
   
    let value = e.target.value;
    setQueryParam(value);

    try {
      console.log("Searching for:", value);
      const response = await fetchResults(value);

      if (response.status === 200) {
        setQueryResults(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      setQueryResults([]); 
    }
  };

  return (
    <div
      style={{
      backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
        
      }}
    >
      <Navigationbar />

      
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <div className="fs-3 text-center"
                ><strong>All Expenses </strong></div><br></br>
                <div className="body"></div>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                  />
                </Form.Group>
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
                    {
                    expenses.length > 0
                    
                    ? results.map((expense, index) => (
                    
                    <tr key={expense.expenseId}>
                            <td>{index + 1}</td>
                            <td>{expense.date}</td>
                            <td>{expense.expenseName}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>
                              <Link
                                to={"/updateExpense/" + expense.expenseId}
                                className="btn btn-sm btn-primary"
                              >
                                Edit{" "}
                              </Link>

                              <button
                                onClick={async () => {
                                  try {
                                    await deleteUserExpense(expense.expenseId);

                                    setExpenses((prevExpenses) =>
                                      prevExpenses.filter(
                                        (item) =>
                                          item.expenseId !== expense.expenseId
                                      )
                                    );
                                    setQueryResults((prevResults) =>
                                      prevResults.filter(
                                        (item) =>
                                          item.expenseId !== expense.expenseId
                                      )
                                    );
                                  } catch (error) {
                                    console.error(
                                      "Error deleting expense:",
                                      error
                                    );
                                  }
                                }}
                                className="btn btn-sm btn-danger ms-3"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      : results.map((expense, index) => (
                          <tr key={expense.expenseId}>
                            <td>{index + 1}</td>
                            <td>{expense.date}</td>
                            <td>{expense.expenseName}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>
                              <Link
                                to={"updateExpense/" + expense.expenseId}
                                className="btn btn-sm btn-primary"
                              >
                                Edit{" "}
                              </Link>

                              <button
                                onClick={async () => {
                                  try {
                                    await deleteUserExpense(expense.expenseId);
                                    setExpenses((prevExpenses) =>
                                      prevExpenses.filter(
                                        (item) =>
                                          item.expenseId !== expense.expenseId
                                      )
                                    );
                                  } catch (error) {
                                    console.error(
                                      "Error deleting expense:",
                                      error
                                    );
                                  }
                                }}
                                className="btn btn-sm btn-danger ms-3"
                              >  Delete
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
    </div>
  );
};

export default SearchExpense;
