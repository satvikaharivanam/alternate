import React from "react";
import AnotherHeader from "../components/anotherHeader";

export default function Preferences() {
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
        <button>Done</button>
      </div>
    </>
  );
}