import Additem from './Components/Additem-3';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard-3';
import Login from './Components/Login-3';
import Register from './Components/Register-3';

function App() {
  return (
    <div>
      <Router> 
        <Routes>
          <Route  path='/' exact element={<Dashboard/>} />
          <Route path='/add' element={<Additem/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
