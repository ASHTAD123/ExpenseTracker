import React from 'react'
import Table from "react-bootstrap/Table";
import getExpenses from "../Services/GetExpensesService";
import { useState } from 'react';
import { useEffect } from 'react';

const GetExpense = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(()=>{
    getExpenses().then((res)=>{

      setExpenses(res.data);
      console.log(res.data);
      
    }).catch((error)=>{
      console.log(error);
      
    })
  }
  ,[])

  return (
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetExpense