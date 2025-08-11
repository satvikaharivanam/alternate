import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react"
import Header from "../components/header";
import SignupPage from "./signuppage";
import axios from "axios";

export default function LoginPage(){
  const [form, setForm] = React.useState({
    username : "",
    password:""
  })
  const handleChanges = (e) =>{
    setForm(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("trying to login in??")

    try{
      const res = await axios.post("http://localhost:5001/api/login",form)
      console.log("did that login girl")
      alert(res.data.message)
    }catch(err){
      alert(err.message?.data?.message || "cant login loser")
    }
  }
  return(
    <>
      <Header />
      <div className="login-page">
        <h1>Login Page</h1>
        <form 
          className="login-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Username:</label>
          <input 
            type="text"  
            id="username" 
            name="username" 
            value = {form.username}
            onChange={handleChanges}
            required 
          />  
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            value={form.password} 
            onChange={handleChanges}
            required 
          />
          <button type="submit">Login</button>
        </form>
        <div>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}