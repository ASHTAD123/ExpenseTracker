import React from "react";
import { useState } from "react";
import FormFieldError from "./FormFieldError";
import { getResponseError } from "./errorUtils";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState("");
  const API_REGISTER_USER_URL = "http://localhost:8080/expenseTracker/register";

  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setError("");
    setRegistrationDetails((registrationDetails) => ({
      ...registrationDetails,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(API_REGISTER_USER_URL, registrationDetails, {
        headers: {
          Authorization: "Bearer your-token",
          "Content-Type": "application/json",
        },
      })
      .catch(function (error) {
        if (error.response) {
          setError(getResponseError(error));
          console.log("ERROR : ");
          console.log(error.response.data.username);
        }
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="">
          <div className="card">
            <div className="card-header fs-5 text-center">Register</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => handleChange(e)}
                  />
                </div>        
                {/* <FormFieldError message={error.response.data.username}/> */}

                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Create Password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Please enter your email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="fullName">Full Name</label>
                  <br></br>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Pls enter your Full Name"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
 