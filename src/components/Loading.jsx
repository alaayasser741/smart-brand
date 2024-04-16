import React from "react";
import "../styles/Loading.css";
const Loading = () => {
  return (
    <div className="warper">
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};

export default Loading;
