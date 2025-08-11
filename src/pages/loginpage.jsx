import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../components/header";
import SignupPage from "./signuppage";
export default function LoginPage(){
  return(
    <>
      <Header />
      <div className="login-page">
        <h1>Login Page</h1>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
        <div>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}