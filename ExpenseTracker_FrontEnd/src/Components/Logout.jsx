import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  
  const navigate = useNavigate()

  window.localStorage.removeItem("loggedIn")
  console.log("Logging out");

  useEffect(() => {
  
      navigate("/login")
    
  }, [])
  
  
  return <div>You have been Logged out...</div>;
};

export default Logout;
