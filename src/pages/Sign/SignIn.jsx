import React from "react";
import Sign from "../../components/Sign/Sign";
export default function SignIn() {
  let signin = {
    title: "Sign In",
    info1: "none",
    b1: "In",
    msg: "Don't",
    b2: "Up",
  };

  return (
    <div className="sign">
      <Sign sign={signin} />
    </div>
  );
}
