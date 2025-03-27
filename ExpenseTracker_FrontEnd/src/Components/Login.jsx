import React from "react";
import { useState } from "react";
import loginUser from "../Services/LoginService";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import backgroundImage from "../assets/bg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigationbar from "../Components/Navbar";
const Login = () => {

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [failureMsg, setFailureMsg] = useState("");
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const notifyLogin = (message) => {
    toast.success(message, {
      autoClose: 2000,
      onClose: () => setTimeout(() => navigate("/"), 100), // Small delay
    });
  };

  const notifyLogout = (message) => {
    toast.success(message, {
      autoClose: 1000,
      onClose: () => setTimeout(() => navigate("/"), 100), // Small delay
    });
  };

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    handleReset();
    const value = e.target.value;

    setLoginDetails((loginDetails) => ({
      ...loginDetails,
      [e.target.name]: value,
    }));
  };

  const handleReset = () => {
    setEmailError("");
    setPasswordError("");
    setSuccessMsg("");
    setFailureMsg("");
  };

  const handleSubmit = (event) => {
    console.log("SUBMIT");

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      console.log("TRY");

      const response = loginUser(loginDetails);

      response
        .then((response) => {
          console.log("then");
          let successMsg = "Login Success 😁";
          notifyLogin(successMsg);
          console.log("AFTER NOTIFY CALL");

          if (response.status === 200 || response.status === 202) {
            console.log("SUCCESS");
            console.log(" Status: ", response.status);
            console.log(successMsg);
          } else {
            console.log("FAILURE");
          }
        })
        .catch((error) => {
          if (error.status === 400 || error.status === 500) {
            let errLoginMsg = "Login failed ☹️ ";
            console.log(" Status: ", error.response.status);
            console.error("Login failed");
            notifyLogout(errLoginMsg);

            if (
              error.response.data ===
              "User Already exists with this email ,pls try different email"
            ) {
              console.log(error.response.data.email);
              setEmailError(error.response.data.email);
            }
            console.log("ERROR");
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
        className="p-4 rounded"
        style={{
          maxWidth: "400px",
          width: "90%",
        }} // Ensures responsiveness

        
      >
        <Form className="bg-white p-4 rounded">
          <h2 className="text-center fs-3 mb-4 text-success">Login</h2>

          {successMsg && (
            <div className="text-center text-success">{successMsg}</div>
          )}
          {failureMsg && (
            <div className="text-center text-danger">{failureMsg}</div>
          )}

          <Form.Group className="mb-3" controlId="email_login">
            <Form.Label className="fs-6 text-start d-block mb-2">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="fs-6"
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          {emailError && (
            <div className="text-start text-danger">{emailError}</div>
          )}

          <Form.Group className="mb-3" controlId="password_login">
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
          {passwordError && (
            <div className="text-start text-danger">{passwordError}</div>
          )}

          <div className="text-center mt-4">
            <div className="d-flex justify-content-center gap-3">
              <Button className="fs-6" variant="success" onClick={handleSubmit}>
                Login
              </Button>
              <ToastContainer />
              <Button className="fs-6" variant="danger" type="reset">
                Reset
              </Button>
            </div>
            <div className="mt-3">
              <Nav.Link
                href="register"
                className="text-primary text-decoration-none"
              >
                New User?
              </Nav.Link>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
