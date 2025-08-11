import React from 'react';
import LandingPage from './pages/landingpage';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
     </Routes>
    </Router>
    </>
  )

}