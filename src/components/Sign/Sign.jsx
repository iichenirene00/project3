import React, { useState } from "react";
import "./Sign.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signed } from "../../Store/signSlice";
import { useDispatch } from "react-redux";

export default function Sign({ sign }) {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let handleName = (e) => {
    setName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let nav = useNavigate();
  let handleSigned = () => {
    nav("/");
  };

  let sign_up = {
    name: name,
    email: email,
    password: password,
  };
  let dispatch = useDispatch();
  return (
    <div className="sign_wrapper">
      <div className="sign_top">
        <div className="sign_left">
          <h3 className="sign_title">
            {sign.title} to Salinka <br />
          </h3>
          <form action="">
            {sign.info1 === "none" ? (
              ""
            ) : (
              <div className="input_info">
                <label className="input_name" htmlFor="">
                  {sign.info1}
                </label>
                <input
                  className="input_box"
                  type="text"
                  placeholder="John Doe"
                  onChange={handleName}
                />
              </div>
            )}
            <div className="input_info">
              <label className="input_name" htmlFor="">
                * Email
              </label>
              <input
                onChange={handleEmail}
                className="input_box"
                type="email"
                placeholder="test@example.com"
              />
            </div>
            <div className="input_info">
              <label className="input_name" htmlFor="">
                * Password
              </label>
              <input
                className="input_box"
                type="password"
                placeholder="Your Password"
                onChange={handlePassword}
              />
            </div>
            <br />
            <div className="b1_wrapper">
              <button
                type="button"
                className="b1"
                onClick={() => {
                  dispatch(signed(sign_up));
                  handleSigned();
                }}
              >
                Sign {sign.b1} →
              </button>
            </div>
          </form>
        </div>
        <div className="sign_mid">
          <h6 className="or">OR</h6>
        </div>
        <div className="sign_right">
          <button className="facebook">
            <img src="" alt="" />
            Continue with Facebook
          </button>
          <button className="google">
            <img src="" alt="" />
            Continue with Google
          </button>
          <button className="github">
            <img src="" alt="" />
            Continue with Github
          </button>
        </div>
      </div>
      <div className="sign_bottom">
        <p className="msg">{sign.msg} have an account</p>
        {sign.b2 === "In" ? (
          <NavLink to="/signin">
            <button className="b2">Sign {sign.b2}</button>
          </NavLink>
        ) : (
          <NavLink to="/signup">
            <button className="b2">Sign {sign.b2}</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
