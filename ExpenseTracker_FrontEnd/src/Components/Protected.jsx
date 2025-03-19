import { Link, useNavigate } from "react-router";

import React, { useEffect } from "react";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
   
    if (!login) {
      navigate("/expenseTracker/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
