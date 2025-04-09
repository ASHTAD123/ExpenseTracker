import "./App.css";
import { BrowserRouter, Route, Routes, Navigate, replace } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddExpense from "./Components/AddExpense";
import UpdateExpense from "./Components/UpdateExpense";
import DeleteExpense from "./Components/DeleteExpense";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import About from "./Components/About";
import Home from "./Components/Home";
import SearchExpense from "./Components/SearchExpense"
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/expenseTracker/register" element={<Register />} />
        <Route path="/expenseTracker/login" element={<Login />} />
        <Route path="/expenseTracker/logout" element={<Logout />} />

         {/* Protected Routes */}
         <Route element={<ProtectedRoute />}>
      
          <Route path="/expenseTracker/addExpense" element={<AddExpense />} />
          <Route path="/expenseTracker/search" element={<SearchExpense />} />
          <Route path="/expenseTracker/updateExpense/:expenseId" element={ <UpdateExpense />}/>
          <Route path="/expenseTracker/deleteExpense" element={<DeleteExpense/>}
        />
        </Route>

        <Route path="/about" element={<About />} />
    
      </Routes>
    </BrowserRouter>
  );

}

export default App;

