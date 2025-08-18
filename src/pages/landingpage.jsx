import Header from '../components/header.jsx';
import Landing from '../components/landing.jsx';
import { Routes, Route } from "react-router-dom";
import LoginPage from './loginpage.jsx';
import SignupPage from './signuppage.jsx';
import Preferences from './preferences.jsx';
export default function LandingPage() {
  return (
    <>
      <Header />
      <Landing />
    </>
  );
}
