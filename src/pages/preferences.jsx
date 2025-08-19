import React from "react";
import AnotherHeader from "../components/anotherHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Preferences() {
  const navigate = useNavigate()
  const [preference,setPreference] = React.useState([])
  const options = [
    "Fantasy",
    "Romance",
    "Science Fiction",
    "Mystery",
    "History",
    "Philosophy",
    "Horror",
    "Thriller & Suspense",
    "Women’s Fiction",
    "LGBTQ+",
    "Contemporary Fiction",
    "Literary Fiction",
    "Graphic Novel",
    "Short Story",
    "Young Adult",
    "New Adult",
    "Children’s",
    "Memoir & Autobiography",
    "Biography",
    "Self-help",
    "True Crime",
    "Humor",
    "Religion & Spirituality",
    "Science & Technology"
  ]
  function togglePreference(pref){
    setPreference((prev) => 
      prev.includes(pref)
        ? prev.filter((p) => p !== pref)
        : [...prev, pref]                
    );
  }
  
  const handleClick = async (e) => {
    e.preventDefault()
    console.log("saving preferences:",preference)
    try{
      const userId = localStorage.getItem("userId");
  console.log(userId)
      const res = await axios.post("http://localhost:5001/api/signup/preferences", {
        userId,
        preferences: preference,
      })
      alert("set")
      navigate("/login/house")
    }catch(err){
      alert(err.response?.data?.message || "not posted loser")
    }
  }
  return (
    <>
      <AnotherHeader />
      <div className="preferencePage">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => togglePreference(opt)}
            className={`preferenceOption ${
              preference.includes(opt) ? "selected" : ""
            }`}
          >
            {opt}
          </button>
        ))}
        <button 
          className="preferences-submit" 
          onClick={handleClick}
        >Done</button>
      </div>
    </>
  );
}