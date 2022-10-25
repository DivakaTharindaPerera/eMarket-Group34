import './App.css';
import React from 'react';
import Header from './components/Header-1.jsx';
import Login from './components/Login-1.jsx';
import AddItem from './components/Addtocart-1.jsx';
import Register from './components/Register-1.jsx';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <Routes>

      <Route path="/" element={<Header />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>

  );
}

export default App;
