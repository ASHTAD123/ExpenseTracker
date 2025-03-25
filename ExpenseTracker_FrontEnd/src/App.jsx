import "./App.css";
import Navigationbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import AddExpense from "./Components/AddExpense";
import UpdateExpense from "./Components/UpdateExpense";
import DeleteExpense from "./Components/DeleteExpense";
import GetExpense from "./Components/GetExpense";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Logout from "./Components/Logout";
import SearchExpense from "./Components/SearchExpense"

function App() {

   let isLoggedIn = window.localStorage.getItem("loggedIn");
  
  return (
    <BrowserRouter>
      <Navigationbar> </Navigationbar>
      <Routes>
        {/* Unauthorized Routes is logged out */}
             
        
        {!isLoggedIn ? (
          <>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Login />}></Route>
          </>
        ) : (
          <>
            <Route path="/logout" element={<Logout />} />
            <Route path="/search" element={<SearchExpense/>}></Route>
          </>
        )}

        {/* <Route path="/logout" element={<Logout />}></Route> */}

        {/* Protected Routes when user is logged in*/}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Home />}></Route>
          <Route path="/register" element={<Home />}></Route>
          <Route path="/addExpense" element={<AddExpense />}></Route>
          <Route
            path="/updateExpense/:expenseId"
            element={<UpdateExpense />}
          ></Route>
          <Route path="/deleteExpense" element={<DeleteExpense />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
