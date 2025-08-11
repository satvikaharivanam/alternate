import { useNavigate } from "react-router-dom";   
export default function Starter(props) {
  const navigate = useNavigate();

  return (
    <div className={props.divAlign ? "pictureblog-text-to-right" : "pictureblog-text-to-left"}>
      <div className="pictureblog-images">
        <img alt="here" />
        <img alt="here" />
        <img alt="here" />
        <img alt="here" />
        <img alt="here" />
        <img alt="here" />
      </div>
      <div className="pictureblog-text">
        <span className={props.firstClass}>{props.first}</span>
        <span className={props.secondClass}>{props.second}</span>
        
        {/* navigate to "/login" */}
        <button 
          onClick={() => navigate("/login")} 
          className={props.buttonClass}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}
