import React from "react";
import { useState } from "react";
import FormFieldError from "./FormFieldError";
import registerUser from "../Services/RegistrationService";

const Register = () => {
  const [errorUsername, setUsernameError] = useState("");
  const [errorPassword, setPasswordError] = useState("");
  const [errorEmail, setEmailError] = useState("");
  const [errorFullName, setFullNameError] = useState("");

  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUsernameError("");
    setRegistrationDetails((registrationDetails) => ({
      ...registrationDetails,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = registerUser(registrationDetails);

      response
        .then((response) => {
       
          if (response.status === 200 || response.status === 202) {
            console.log(" Status: ", response.status);
            alert("Registration Successful");
            console.log("Registration Successful");
          }
        })
        .catch((error2) => {
          if (
            error2.response.status === 400 ||
            error2.response.status === 500
          ) {
            console.log(" Status: ", error2.response.status);
            console.error("Registration failed:");
            alert("Registration failed");

            if (
              error2.response.data ===
              "User Already exists with this email ,pls try different email"
            ) {
              console.log(error2.response.data);
              alert(error2.response.data);
            }

            console.log(" ERROR");
            console.log(error2);

            setUsernameError(error2.response.data.username);
            setPasswordError(error2.response.data.password);
            setEmailError(error2.response.data.email);
            setFullNameError(error2.response.data.fullName);
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
                <FormFieldError message={errorUsername} />

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
                <FormFieldError message={errorPassword} />
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
                <FormFieldError message={errorEmail} />
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
                <FormFieldError message={errorFullName} />
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
