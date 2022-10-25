import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import AddDelivery from './components/AddDelivery_4.jsx'; 
import Login from './components/Login_4.jsx'; 
import Dashboard from './components/Dashboard_4.jsx'; 
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/add" element={<AddDelivery/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/" element={<Dashboard/>}/>
    
   </Routes>
  );
}

export default App;
 