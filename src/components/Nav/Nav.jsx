import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Nav.css";
import Basket from "../Basket/Basket";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Shopfilter from "../Shopfilter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { rfilter } from "../../Store/filterSlice";
import { sclicked, outclick } from "../../Store/signSlice";
import { pressed, searched } from "../../Store/navsearchSlice";
export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  let sclick = useSelector((state) => state.sign.sclick);
  let dispatch = useDispatch();
  let [click, setClick] = useState(false);
  let [user_click, setUserclick] = useState(false);
  let slist = useSelector((state) => state.sign.signlist);
  let [sinput, setSinput] = useState("");
  let handleFeature = () => {
    navigate("./feature");
  };
  let handleRecommend = () => {
    navigate("./recommend");
  };

  let handleContinue = () => {
    navigate("./shop");
    dispatch(sclicked());
  };

  let handleSign = () => {
    navigate("./signup");
    dispatch(sclicked());
  };

  let handleUserclick = () => {
    setUserclick(!user_click);
  };

  let handleType = (e) => {
    setSinput(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      dispatch(searched(false));
    }
  };

  let handleAccount = () => {
    navigate("/account");
  };
  let handleEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      dispatch(pressed(sinput));
    }
  };

  let signlist = useSelector((state) => state.sign.signlist);
  return (
    <>
      {signlist.length === 0 && sclick === true ? (
        <div className="sign_overlay">
          <div className="must_sign">
            <p className="sign_text">
              You must sign in to continue checking out
            </p>
            <br />
            <div className="sign_button">
              <button onClick={handleContinue} className="continue">
                Continue Shopping
              </button>
              &nbsp;
              <button onClick={handleSign} className="scheck">
                Sign in to checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="nav">
        <div className="logo">
          <a className="logo_link">
            <img className="logo_pic" src={logo} alt="" />
          </a>
        </div>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "page active" : "page";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => {
                return isActive ? "page active" : "page";
              }}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feature"
              onClick={handleFeature}
              className={({ isActive }) => {
                return isActive ? "page active" : "page";
              }}
            >
              Feature
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recommend"
              onClick={handleRecommend}
              className={({ isActive }) => {
                return isActive ? "page active" : "page";
              }}
            >
              Recommend
            </NavLink>
          </li>
        </ul>
        <div className="search">
          {location.pathname === "/shop" ? (
            <div className="filter">
              <button
                onClick={() => {
                  setClick(!click);
                  dispatch(rfilter());
                }}
                className="filter_button"
              >
                Filters
              </button>
            </div>
          ) : (
            ""
          )}
          <span className="mag">🔎</span>
          <input
            onChange={handleType}
            onKeyDown={handleEnter}
            className="searchbox"
            type="search"
            name=""
            id=""
            placeholder="Search product..."
          />
        </div>
        <div className="sign_basket">
          <div>
            <Basket />
          </div>
          {slist.length === 0 ? (
            <div className="signs">
              <NavLink
                to="/signup"
                className={({ isActive }) => {
                  return isActive ? "sign_active" : "sign_up";
                }}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/signin"
                className={({ isActive }) => {
                  return isActive ? "sign_active" : "sign_in";
                }}
              >
                Sign In
              </NavLink>
            </div>
          ) : (
            <div className="user" onClick={handleUserclick}>
              <div className="user_nav" type="button">
                <h5 className="user_text">{slist.name}</h5>
                <div className="user_img">{slist.name[0].toUpperCase()}</div>
                <span className="da">⌄</span>
                {user_click === true ? (
                  <div className="user_sub">
                    <div className="account" onClick={handleAccount}>
                      View Account
                      <span className="head">👤</span>
                    </div>
                    <div
                      className="account"
                      onClick={() => {
                        dispatch(outclick());
                      }}
                    >
                      Sign Out
                      <span className="asign">ⓧ</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>

        {click === true ? <Shopfilter /> : ""}
      </div>
    </>
  );
}
