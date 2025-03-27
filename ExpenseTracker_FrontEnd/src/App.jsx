import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
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



function App() {

  return (
    
    <BrowserRouter>
      
      <Routes>
   
        <Route path="/" element={<Home />  }></Route>
        
          <Route path="/register" element={<Register />}></Route>
        
          <Route path="/login" element={<Login />}>
          
            </Route>
        
          <Route path="/logout" element={<Logout />}></Route>
        
          <Route path="/addExpense" element={<AddExpense />}></Route>
        
          <Route path="/search" element={<SearchExpense/>}></Route>
        
          <Route path="/about" element={<About/>}></Route>
        
          <Route path="/updateExpense/:expenseId" element={<UpdateExpense />}></Route>
        
          <Route path="/deleteExpense" element={<DeleteExpense />}></Route>

      </Routes>
    </BrowserRouter>
  );

}

export default App;

