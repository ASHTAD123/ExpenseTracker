// import React from 'react'
// import axios from "axios";
// export const API_REGISTER_USER_URL="http://localhost:8080/expenseTracker/register";

// export const registerUser = (registrationDetails) => {
  
//     axios.post(API_REGISTER_USER_URL,registrationDetails,{
//         headers: {
//              Authorization: "Bearer your-token",
//             "Content-Type": "application/json",
//           },
//     })  .catch(function (error) {
//         if (error.response) {
//           console.log("CATCH BLOCK REGISTRATION SERVICE");
//           console.log(error.response);
//          // console.log(error.response.status);
//           //console.log(error.response.headers);
//         } else if (error.request) {
//           console.log(error.request);
//         } else {
//         }
//         console.log(error.config);
//       });
// }

// export default registerUser