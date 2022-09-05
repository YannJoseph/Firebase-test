import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
// import Login from './pages/login/Login';
import LoginGoogle from './pages/login/LoginGoogle';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginGoogle />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
