import './App.css'
import Navigationbar from './Components/Navbar'
import {BrowserRouter, Route,Routes} from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import AddExpense from './Components/AddExpense';
import UpdateExpense from './Components/UpdateExpense'
import DeleteExpense from './Components/DeleteExpense'
import GetExpense from './Components/GetExpense';
import Register from './Components/Register';
import Login from './Components/Login';
import Protected from './Components/Protected';
import Logout from './Components/Logout';


function App() {

  return (
   <BrowserRouter>
   <Navigationbar> </Navigationbar>

   <Routes>
      {/* <Route path='/home' element={<Protected Component={Home} />}></Route> */}
     
      <Route path='/expenseTracker/home' element={<Home/>}></Route>
      
      <Route path='/expenseTracker/register' element={<Register/>}></Route>
     
     <Route path='/expenseTracker/login' element={<Login/>}></Route>

     <Route path='/expenseTracker/logout' element={<Logout/>}></Route>

      {/* <Route path='/expenseTracker/expenses' element={<Protected Component={GetExpense}/>}></Route> */}
     
      <Route path='/expenseTracker/expenses' element={<GetExpense/>}></Route>
     
      <Route path='/expenseTracker/addExpense' element={<Protected Component={AddExpense} />} ></Route>

      <Route path='/expenseTracker/updateExpense' element={<Protected Component ={UpdateExpense} />} ></Route>
   
      <Route path='/expenseTracker/deleteExpense' element={<Protected Component ={DeleteExpense} />}></Route>

   </Routes>
   </BrowserRouter> 
  );
}

export default App;
