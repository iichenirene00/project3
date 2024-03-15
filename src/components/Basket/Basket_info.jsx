import React, { useState } from "react";
import "./Basket_info.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removed,
  cartq_minus,
  cartq_add,
  cart_cross,
  cleared,
} from "../../Store/changeSlice";
import { sclicked } from "../../Store/signSlice";
import { toggleDrawer } from "../../Store/basketSlice";
import { useNavigate } from "react-router-dom";
export default function Basket_info() {
  let cart_data = useSelector((state) => state.change.cartlist);
  let total = 0;
  let dispatch = useDispatch();
  let signlist = useSelector((state) => state.sign.signlist);
  let nav = useNavigate();
  return (
    <div className="cart">
      <div className="cart_wrapper">
        <div className="cart_header">
          <h3 className="cart_title">
            My Basket{" "}
            <span className="cart_item">({cart_data.length} item) </span>
          </h3>
          <button
            className="close"
            onClick={() => {
              dispatch(toggleDrawer(false));
            }}
          >
            Close
          </button>
          <button
            className="clear"
            onClick={() => {
              dispatch(cleared());
            }}
          >
            Clear Basket
          </button>
        </div>

        {cart_data.length === 0 ? (
          <div className="empty">
            <h5 className="empty_msg">Your basket is empty</h5>
          </div>
        ) : (
          cart_data.map((data) => (
            <div className="basket_item" key={data.id}>
              <div className="item_control">
                <button
                  className="cart_control"
                  onClick={() => {
                    dispatch(cartq_add(data.id));
                  }}
                >
                  +
                </button>
                <button
                  className="cart_control"
                  onClick={() => {
                    dispatch(cartq_minus(data.id));
                  }}
                >
                  −
                </button>
              </div>
              <div className="item_wrapper">
                <div className="item_img">
                  <img className="cart_img" src={data.pic} alt="" />
                </div>
                <div className="item_detail">
                  <a className="a_detail">
                    <h4 className="item_name">{data.name}</h4>
                  </a>
                  <div className="item_info">
                    <div className="infos">
                      <span className="info_title">Quantity</span>
                      <h5 className="sub">{data.quant}</h5>
                    </div>
                    <div className="infos">
                      <span className="info_title">Size</span>
                      <h5 className="sub">{data.size}</h5>
                    </div>
                    <div className="infos">
                      <span className="info_title">Color</span>
                      <div
                        className="b_color"
                        style={{ backgroundColor: `${data.c_choose}` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="item_price">
                  <h4 className="cartp">${data.price * data.quant}</h4>
                  <div className="total" style={{ display: "none" }}>
                    {(total += data.price * data.quant)}
                  </div>
                </div>
                <button
                  onClick={() => {
                    dispatch(cart_cross(data.id));
                    dispatch(removed());
                  }}
                  className="cartr"
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="checkout">
        <div className="total">
          <p className="total_title">Subtotal Amount</p>
          <h2 className="amount">${total}</h2>
        </div>
        <button
          className={
            cart_data.length === 0 ? "total_button tpo" : "total_button"
          }
          onClick={() => {
            dispatch(sclicked());
            dispatch(toggleDrawer(false));
            if (signlist.length !== 0) {
              nav("/summary");
            }
          }}
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
}
