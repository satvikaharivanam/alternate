import React from 'react';
import { Link,useNavigate } from "react-router-dom";

import Header from "../components/header";
import axios from "axios";
import Preferences from './preferences.jsx';
export default function SignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = React.useState({
    username:"",
    email : "",
    password:""
  })
  const handleChanges = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("Submitting form:", form)
    try{
      const res = await axios.post("http://localhost:5001/api/signup",form)
      alert(res.data.message)
      navigate("/signup/preferences")
    }catch(err){
      alert(err.response ?.data?.message || "fail")
    }
  }
  return(
    <>
      <Header />
      <div className="signup-page">
        <h1>Sign Page</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            onChange={handleChanges}
            value={form.username}
            required 
          />  
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={handleChanges}
            value={form.email}
            required 
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            onChange={handleChanges}
            value={form.password}
            required 
          />
          <button type="submit">Sign Up</button>
        </form>
        <div>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>  
    </>

  )
}