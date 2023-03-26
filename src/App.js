import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import QrForm from './components/QrForm';

function App() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/qrform" element={<QrForm/>} />
      </Routes>
    </div>
  );
}

export default App;
