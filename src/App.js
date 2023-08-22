
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Nevbar from './components/Nevbar';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
  <>
  <BrowserRouter>
     <Nevbar/>
     <Routes>
      <Route path= "/" element={<EmployeeList/>} ></Route>
      <Route path= "/employeelist" element={<EmployeeList/>} ></Route>
      <Route path= "/addemployee" element={<AddEmployee/>} ></Route>
     </Routes>
      
  </BrowserRouter>
   

  </>
  );
}

export default App;
