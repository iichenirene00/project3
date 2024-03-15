import React from "react";
import "./Checkout_nav.css";
import { useLocation } from "react-router-dom";
export default function Checkout_nav() {
  let location = useLocation();
  return (
    <div className="checkout_header">
      <ul className="checkout_menu">
        <li className="check_list">
          <div className="checkout_item">
            <div className="checkout_icon">
              <h4
                className={
                  location.pathname == "/summary"
                    ? "is_active header_step "
                    : "header_step"
                }
              >
                1
              </h4>
            </div>
            <h6
              className={
                location.pathname == "/summary"
                  ? "checkout_sub is_active_sub"
                  : "checkout_sub"
              }
            >
              Order Summary
            </h6>
          </div>
        </li>
        <li className="check_list">
          <div className="checkout_item">
            <div className="checkout_icon">
              <h4
                className={
                  location.pathname == "/shipping"
                    ? "is_active header_step "
                    : "header_step"
                }
              >
                2
              </h4>
            </div>
            <h6
              className={
                location.pathname == "/shipping"
                  ? "checkout_sub is_active_sub"
                  : "checkout_sub"
              }
            >
              Shipping details
            </h6>
          </div>
        </li>
        <li className="check_list">
          <div className="checkout_item">
            <div className="checkout_icon">
              <h4
                className={
                  location.pathname == "/payment"
                    ? "is_active header_step "
                    : "header_step"
                }
              >
                3
              </h4>
            </div>
            <h6
              className={
                location.pathname == "/payment"
                  ? "checkout_sub is_active_sub"
                  : "checkout_sub"
              }
            >
              Payment
            </h6>
          </div>
        </li>
      </ul>
    </div>
  );
}
