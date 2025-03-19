import React from 'react'

const Logout = () => {

  localStorage.removeItem("login");
  console.log(localStorage.getItem("login"));
  
  return (
    <div>You have been Logged out...</div>
    
  )
}

export default Logout