import React from "react";
import Account_tab from "../../components/Account/Account_tab";
import Account_content from "../../components/Account/Account_content";
import "../Mid.css";
export default function Account() {
  return (
    <div className="account">
      <div className="user_tab">
        <Account_tab />
        <Account_content />
      </div>
    </div>
  );
}
