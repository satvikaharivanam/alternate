import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="header-container">
          <div className="home">
          <button onClick={()=> navigate("/")} className="onHeader">home</button>
        <button className="onHeader">about</button>
        </div>
        
        <div className="signup">
          <button onClick={()=> navigate("/login")} className="onHeader">login</button>  
        <button onClick={() => navigate("/signup")} className="onHeader">register</button>
        </div>
        
        </div>
      </header>   
    </>
  )

}
