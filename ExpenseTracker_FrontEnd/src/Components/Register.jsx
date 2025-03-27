import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import backgroundImage from "../assets/bg.jpg";
import registerUser from "../Services/RegistrationService";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [errorUsername, setUsernameError] = useState("");
  const [errorPassword, setPasswordError] = useState("");
  const [errorEmail, setEmailError] = useState("");
  const [errorFullName, setFullNameError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [failureMsg, setfailureMsg] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

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
  const handleReset = () => {
    setEmailError("");
    setPasswordError("");
    setUsernameError("");
    setFullNameError("");
    setSuccessMsg("");
    setfailureMsg("");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const response = registerUser(registrationDetails);

      response
        .then((response) => {
          let successMsg = "Registration Success 😁";

          if (response.status === 200 || response.status === 202) {
            console.log(" Status: ", response.status);

            toast.success(successMsg, {
              autoClose: 3000,
            });

            setTimeout(() => {
              navigate("/");
            }, 4000);
            console.log(successMsg);
          }
        })
        .catch((error) => {
          if (error.response.status === 400 || error.response.status === 500) {
            console.log(" Status: ", error.response.status);
            console.error("Registration failed :( ");
            setfailureMsg("Registration failed :(");

            if (
              error.response.data ===
              "User Already exists with this email ,pls try different email"
            ) {
              toast(
                "User Already exists with this email ,pls try different email"
              );
            }

            console.log(" ERROR");
            console.log(error);

            setUsernameError(error.response.data.username);
            setPasswordError(error.response.data.password);
            setEmailError(error.response.data.email);
            setFullNameError(error.response.data.fullName);
          }
        });
    } catch (error) {
      console.error("Registration failed :( , Something went wrong", error);
    }
  };

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
      <Container
        className="d-flex justify-content-center align-items-center container vh-100"
        style={{ backgroundColor: "" }}
      >
        <ToastContainer />
        <Form
          className="bg-white rounded justify-content-center p-4"
          style={{
            maxWidth: "600px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2 className="justify-content-start text-center fs-1 mb-4 text-success">
            Register
          </h2>

          {successMsg && (
            <div className="text-center text-success fs-6 w-100">
              {successMsg}
            </div>
          )}

          {/* {
        <div className="text-center text-danger fs-6 w-100">{failureMsg}</div>
      } */}
          <Form.Group className="mb-3" controlId="username">
            <Form.Label className="fs-6 text-start d-block">
              Username
            </Form.Label>
            <Form.Control
              type="texte"
              placeholder="Enter username"
              className="fs-6"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          {errorUsername && (
            <div
              className="container border  fs-6"
              style={{ maxWidth: "600px" }}
            >
              <div className="text-center text-danger w-100">
                {errorUsername}
              </div>
            </div>
          )}

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="fs-6 text-start d-block">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="fs-6"
              style={{ minWidth: "300px", width: "100%" }}
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          {errorEmail && (
            <div
              className="container border fs-6 "
              style={{ maxWidth: "600px" }}
            >
              <div className="text-center text-danger w-100">{errorEmail}</div>
            </div>
          )}

          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="fs-6 text-start d-block">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              className="fs-6"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          {errorPassword && (
            <div
              className="container border fs-6 "
              style={{ maxWidth: "600px" }}
            >
              <div className="text-center text-danger w-100">
                {errorPassword}
              </div>
            </div>
          )}

          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label className="fs-6 text-start d-block">
              Full Name
            </Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder="Enter your Full Name"
              className="fs-6"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          {errorFullName && (
            <div
              className="container border fs-6 "
              style={{ maxWidth: "600px" }}
            >
              <div className="text-center text-danger w-100">
                {errorFullName}
              </div>
            </div>
          )}

          <div className="text-center mt-5">
            <div className="d-flex justify-content-center gap-4">
              <Button
                className="w-40 fs-5"
                variant="success"
                onClick={handleSubmit}
              >
                Register
              </Button>
              <Button
                className="w-40 fs-5"
                variant="danger"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>

            <div className="mt-3">
              <Nav.Link
                href="login"
                className="text-primary text-decoration-none"
              >
                Already Registered ?
              </Nav.Link>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
