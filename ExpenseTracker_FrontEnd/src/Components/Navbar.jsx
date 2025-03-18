import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigationbar = () => {
 
  return (

      <Navbar  bg="success" variant="dark" expand="lg" fixed="top" >
      <Navbar.Brand href="#home" className="text-white">Expense Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"  >
        <Nav className="mr-auto" >
        <Nav.Link href="/" className="text-white">Home</Nav.Link>
          <Nav.Link href="addExpense" className="text-white">Add Expense</Nav.Link>
          <Nav.Link href="#bout"className="text-white">About</Nav.Link>
          <NavDropdown className="text-white" title="Services" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1" >Some service</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Some other service
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              some service we offer
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
