import React from "react";
import "./Account_tab.css";
import { useDispatch, useSelector } from "react-redux";
import { changed } from "../../Store/accountSlice";
export default function Account_tab() {
  let dispatch = useDispatch();
  let c1 = useSelector((state) => state.account.c1);
  let c2 = useSelector((state) => state.account.c2);
  let c3 = useSelector((state) => state.account.c3);
  return (
    <div className="user_tab_nav">
      <ul className="user_tab_menu">
        <li
          className={c1 ? "tab_item tab_chosen" : "tab_item"}
          onClick={() => {
            dispatch(changed(1));
          }}
        >
          Account
        </li>
        <li
          onClick={() => {
            dispatch(changed(2));
          }}
          className={c2 ? "tab_item tab_chosen" : "tab_item"}
        >
          My Wish List
        </li>
        <li
          className={c3 ? "tab_item tab_chosen" : "tab_item"}
          onClick={() => {
            dispatch(changed(3));
          }}
        >
          My Orders
        </li>
      </ul>
    </div>
  );
}
