import React from "react";
import { useState } from "react";
import FormFieldError from "./FormFieldError";
import loginUser from "../Services/LoginService";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const [errorEmail, setEmailError] = useState("");
  const [errorPassword, setPasswordError] = useState("");
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPasswordError("");
    setEmailError("");
    setLoginDetails((loginDetails) => ({
      ...loginDetails,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = loginUser(loginDetails);

      response
        .then((response) => {
          if (response.status === 200 || response.status === 202) {
            localStorage.setItem("login", true);
            navigate("/expenseTracker/home");
            console.log(" Status: ", response.status);
              alert("Login Successful");
            console.log("Login Successful");

            useEffect(() => {
              let login = localStorage.getItem("login");

              if (login) {
                navigate("/expenseTracker/home");
              }
            });

            // navigate('/home');
          }
        })
        .catch((error) => {
          if (error.status === 400 || error.status === 500) {
            console.log(" Status: ", error.response.status);
            console.error("Login failed");
            alert("Login failed");

            if (
              error.response.data ===
              "User Already exists with this email ,pls try different email"
            ) {
              console.log(error.response.data);
              alert(error.response.data);
            }
            console.log(" ERROR");
            console.log(error);
            setEmailError(error.response.data.email);
            setPasswordError(error.response.data.password);
          }
        });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="">
          <div className="card">
            <div className="card-header fs-5 text-center">Login</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your Email here"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <FormFieldError message={errorEmail} />

                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your Password here"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <FormFieldError message={errorPassword} />

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

export default Login;
