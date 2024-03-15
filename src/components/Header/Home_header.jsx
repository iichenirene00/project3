import React from "react";
import "./Header.css";
import girl1 from "../../images/girl1.png";
import { NavLink } from "react-router-dom";
export default function Home_header() {
  return (
    <div className="header">
      <div className="header_left">
        <h1 className="title">
          See{" "}
          <span className="thin">
            everything <br /> with
          </span>
          Clarity
        </h1>
        <p className="text">
          Buying eyewear should leave you happy and good-looking, with money in
          your pocket. Glasses, <br /> sunglasses, and contacts—we’ve got your
          eyes covered.
        </p>
        <NavLink
          to="/shop"
          className={({ isActive }) => {
            return isActive ? "shop" : "shop";
          }}
          href=""
        >
          Shop Now →
        </NavLink>
      </div>

      <div className="header_right">
        <img className="pic" src={girl1} alt="" />
      </div>
    </div>
  );
}
