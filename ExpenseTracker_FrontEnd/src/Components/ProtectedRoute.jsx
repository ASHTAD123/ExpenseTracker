import React from 'react'
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return isLoggedIn==="true"?<Outlet/>:<Navigate to="/login"/>

  return (
    <div>Protected</div>
  )
}

export default ProtectedRoute