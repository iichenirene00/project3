import React from "react";
import banner from "../../images/banner.jpg";
import { useSelector } from "react-redux";
import "./Account_content.css";
export default function Account_content() {
  let slist = useSelector((state) => state.sign.signlist);
  const start = Date.UTC();
  let c1 = useSelector((state) => state.account.c1);
  let c2 = useSelector((state) => state.account.c2);
  let c3 = useSelector((state) => state.account.c3);
  return (
    <div className="user_tab_content">
      <div className={c1 ? "user_profile" : "no_display"}>
        <div className="user_profile_block">
          <div className="user_profile_banner">
            <div className="user_profile_banner_wrapper">
              <img className="banner_img" src={banner} alt="" />
            </div>
          </div>
          <div className="avatar_wrapper">
            <div className="avatar_img">
              <div className="name">{slist.name[0].toUpperCase()}</div>
            </div>
          </div>
          <button className="edit">Edit Account</button>
          <div className="profile_details">
            <h2>{slist.name}</h2>
            <span>Email</span>
            <br />
            <h5>Address not set</h5>
            <span>Mobile</span>
            <br />
            <h5></h5>
            <span>Date joined</span>
            <h5>{start}</h5>
          </div>
        </div>
      </div>
      <div className={c2 ? "loader" : "no_display"}>
        <h3>My Wish List</h3>
        <strong>
          {" "}
          <span className="text_sub">You don't have a wish list</span>{" "}
        </strong>
      </div>
      <div className={c3 ? "loader" : "no_display"}>
        <h3>My Orders</h3>
        <strong>
          {" "}
          <span className="text_sub">You don't have any orders</span>{" "}
        </strong>
      </div>
    </div>
  );
}
