import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button } from "bootstrap";
import ButtonComponent from "./ButtonComponent";

const Header = ({ btnLeft, btnMiddle, btnRight, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className="header_frame">
      <div className="navigator">
        <div>{btnLeft}</div>
        <div>{btnMiddle}</div>
        <div>{btnRight}</div>
      </div>
    </div>
  );
};

export default Header;
