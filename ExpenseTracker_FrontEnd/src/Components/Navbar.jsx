import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AddExpense from "./AddExpense";
import Logout from "./Logout";
import Home from "./Home";
import About from './About'
import { Link } from "react-router";
// import  ParentManageLoggedInState from './ParentManageLoggedInState'


// console.log("isLoggedIn : " +isLoggedIn);
const Navigationbar = () => {
  
  const isLoggedIn = window.localStorage.getItem("loggedIn");
//   {sharedLoggedInStatus}
// console.log("IS LOGGED IN BEFORE LOGIN : " +   {sharedLoggedInStatus});

  return (
    
    <Navbar bg="success" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home" className="text-white ms-4">Expense Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {
          // Show links only if logged in
          isLoggedIn && (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/addExpense" className="text-white">Add Expense</Nav.Link>
              <Nav.Link as={Link} to="/search/" className="text-white">Search</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <Nav.Link as={Link} to="/logout" className="text-white">Logout</Nav.Link>
   
            </Nav>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
