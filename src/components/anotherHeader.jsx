
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
export default function anotherHeader(){
  const navigate = useNavigate();
  function logout(){
    localStorage.setItem("isLogged", "false");
    navigate("/login")
  }
  return(
    <>
      <header>
        <div className="header-container">
          <div className="home">
          <button onClick={()=> navigate("/")} className="onHeader">home</button>
         
          <button className="onHeader">explore</button>
        <button className="onHeader">lists</button>
        <button className="onHeader">communities</button>
        <button className="onHeader">your books</button>
        </div>
          
        <div className="onRigth">
          <button className="onHeader" onClick={logout}>logout</button>
        </div>
        

        </div> 
        
        
      </header>  
    </>
  )
}