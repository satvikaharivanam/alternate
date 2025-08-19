import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireLogin = false, requireSignedUp = false }){
  const isLogged = localStorage.getItem("isLogged") === "true"
  const signedUp = localStorage.getItem("signedUp")==="true"
  if(requireLogin && !isLogged){
    return <Navigate to= "/login" replace/>
  }

  if(requireSignedUp && !signedUp){
    return <Navigate to= "/signup" replace/>
  }

  return children
}