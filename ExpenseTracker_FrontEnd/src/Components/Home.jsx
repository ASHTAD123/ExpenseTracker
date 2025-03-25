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
      
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
