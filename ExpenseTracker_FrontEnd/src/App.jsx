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

function App() {

  return (
   <BrowserRouter>
   <Navigationbar  > </Navigationbar>

   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/expenses' element={<GetExpense/>}></Route>
      <Route path='/addExpense' element={<AddExpense/>}> </Route>
      <Route path='/updateExpense' element={<UpdateExpense/>} ></Route>
      <Route path='/deleteExpense' element={<DeleteExpense/>}></Route>
   </Routes>
   </BrowserRouter> 
  );
}

export default App;
