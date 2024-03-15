import React from "react";
import Sign from "../../components/Sign/Sign";
export default function SignUp() {
  let signup = {
    title: "Sign Up",
    info1: "* Full Name",
    b1: "Up",
    msg: "Already",
    b2: "In",
  };

  return (
    <div className="sign">
      <Sign sign={signup} />
    </div>
  );
}
