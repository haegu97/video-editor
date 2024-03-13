import React from "react";

import "../App.css";

const ButtonComponent = ({ text, onClick }) => {
  return (
    <div className="buttonComponent_wrapper">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default ButtonComponent;
