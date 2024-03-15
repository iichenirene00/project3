import React from "react";
import "./Notfound.css";
import { useNavigate } from "react-router-dom";
export default function Notfound() {
  let nav = useNavigate();
  let handleBack = () => {
    nav("/");
  };
  return (
    <div style={{ marginTop: "300px", textAlign: "center" }}>
      Page you are looking for doesn't exists.
      <br />
      <button className="notfound" onClick={handleBack}>
        Go back
      </button>
    </div>
  );
}
