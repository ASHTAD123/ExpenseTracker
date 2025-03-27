import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import getExpenses from "../Services/GetExpensesService";
import { Link } from "react-router";
import deleteUserExpense from "../Services/DeleteService";
import backgroundImage from "../assets/bg.jpg";
import Form from "react-bootstrap/Form";
import fetchResults from "../Services/SearchExpenseService";
import Navigationbar from "../Components/Navbar";

const SearchExpense = () => {
  
  const [query, setQueryParam] = useState("");
  const [results, setQueryResults] = useState([]);
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

  const handleInputChange = async (e) => {

    let value = e.target.value;
    setQueryParam(value);

    try {
      console.log("Searching for:", value);
      const response = await fetchResults(value);

      if (response.status === 200) {
        setQueryResults(response.data); // Update state with search results

        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      setQueryResults([]); // Ensure UI is not stuck
    }
  };

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
        position: "absolute", 
        left: 0,
        top: 0,
      }}
    >
      
      <Navigationbar/>
      <div>
        
       <div className="container mt-3">
        
        <div className="row">
          
          <div className="col-md-12">
            <div className="card">
              <div className="fs-3 text-center">All Expenses</div>
              <div className="card-body"></div>
              <Form.Group className="mb-3" >
       
          <Form.Control
               type="text"
               placeholder="Search"
               value={query}
               onChange={handleInputChange} 
          />
        </Form.Group>
        <Table responsive="sm">
          
          <thead>
            <tr >
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
            results.length > 0
             
            ? results.map((expenses,index) => (
                 
                 <tr key={expenses.expenseId}>
                   <td>{index+1}</td>
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
                ))
              : expenses.map((expenses, index) => (
                  <tr key={expenses.expenseId}>
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
    </div>
  );
};

export default SearchExpense;
