import './App.css';
// import Header_2 from './components/Header_2.jsx';

import AddItem_2 from './components/AddItem_2.jsx';
import Login_2 from './components/Login_2.jsx';
import Register_2 from './components/Register_2.jsx';
import Dashboard_2 from './components/Dashboard_2.jsx';
import React from 'react';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <Routes>
        {/* <Route path="/" element = {<Header_2/>}/> */}
        <Route path="/register" element = {<Register_2/>}/>
        <Route path="/login" element = {<Login_2/>}/>
        <Route path="/add" element={<AddItem_2/>} />
        <Route path="/" element = {<Dashboard_2/>}/>

      </Routes>
    
  );

}

export default App;
