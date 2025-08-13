import React from 'react';
import LandingPage from './landingpage';
import LoginPage from './loginpage';
import SignupPage from './signuppage';

import Preferences from './preferences';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './dashboard'

export default function routingPage(){
  return(
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signup/preferences' element={<Preferences />} />
        <Route path='/login/house' element ={<Dashboard />} />

     </Routes>
    </Router>
    </>
  )
}

