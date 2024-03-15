import React from "react";
import "./Header.css";
export default function Header({ title, pic }) {
  return (
    <div className="header">
      <div className="header_left">
        <h1 className="title">{title}</h1>
      </div>

      <div className="header_right">
        <img className="pic" src={pic} />
      </div>
    </div>
  );
}
