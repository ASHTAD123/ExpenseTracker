import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

const Navigationbar = () => {

  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <Navbar
      bg="success"
      variant="dark"
      expand="lg"
      fixed="top"
      className="mr-5"
    >
      <Navbar.Brand className="text-white ms-4">
        Expense Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {
          // Show links only if logged in
          isLoggedIn && (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/addExpense" className="text-white">
                Add Expense
              </Nav.Link>
              <Nav.Link as={Link} to="/search/" className="text-white">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">
                About
              </Nav.Link>

            </Nav>
          )
        
        
        }
      </Navbar.Collapse>

     { isLoggedIn && (<Nav>
      <Button as={Link} to="/logout"
       className="btn-danger text-white"
        style={{ marginRight: '20px' }} >
        Logout
      </Button>
    </Nav>)}
    </Navbar>
  );
};

export default Navigationbar;
