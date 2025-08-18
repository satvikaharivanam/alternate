import { Navigate } from "react-router-dom";

export default function protectedRoute({ children }){
  const isLogged = localStorage.getItem("isLogged") === "true"
  if(!isLogged){
    return <Navigate to= "/login" replace/>
  }

  return children
}