import Header from '../components/header.jsx';
import Landing from '../components/landing.jsx';
import { Routes, Route } from "react-router-dom";
import LoginPage from './loginpage.jsx';
import SignupPage from './signuppage.jsx';
export default function LandingPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}
