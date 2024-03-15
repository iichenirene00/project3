import React from "react";
import "./Summary.css";
import "../Mid.css";
import Checkout_nav from "../../components/Checkout/Checkout_nav";
import {
  removed,
  cartq_minus,
  cartq_add,
  cart_cross,
} from "../../Store/changeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Summary() {
  let cart_data = useSelector((state) => state.change.cartlist);
  let total = 0;
  let dispatch = useDispatch();
  let nav = useNavigate();
  let handleShip = () => {
    nav("/shipping");
  };
  let handleShop = () => {
    nav("/shop");
  };
  return (
    <div className="summary">
      <div className="checkout_cart">
        <Checkout_nav />
        <div className="checkout_step1">
          <h3 className="sum_title">Order Summary</h3>
          <span className="sub_title">Review items in your basket</span>
          <br />
          {cart_data.map((data) => (
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
                      <div className="color"></div>
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
          ))}
          <br />
          <div className="total_amount">
            <span className="sleft">Subtotal</span>
            <h3 className="left"> ${total}.00</h3>
          </div>
          <div className="checking_action">
            <button className="continue" onClick={handleShop}>
              🏪 Continue Shopping
            </button>
            <button className="next" onClick={handleShip}>
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
