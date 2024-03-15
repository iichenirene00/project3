import React from "react";
import Checkout_nav from "../../components/Checkout/Checkout_nav";
import "./Shipping.css";
import "../Mid.css";
import { useNavigate } from "react-router-dom";
export default function Shipping() {
  let nav = useNavigate();
  let handleSummary = () => {
    nav("/summary");
  };
  let handlePay = () => {
    nav("/payment");
  };
  return (
    <div className="shipping">
      <div className="checkout_cart">
        <Checkout_nav />
        <div className="step2">
          <h3 className="ship_title">Shipping Details</h3>
          <form action="">
            <div className="shipping_form">
              <div className="form_set">
                <div className="form_group">
                  <div className="form_top">
                    <label className="label_input" htmlFor="fullname">
                      * Full name
                    </label>
                    <input
                      className="input_form"
                      type="text"
                      name="fullname"
                      placeholder="Enter your full name"
                      value=""
                    />
                  </div>
                </div>
                <div className="form_group">
                  <div className="form_top">
                    <label className="label_input" for="email">
                      * Email
                    </label>
                    <input
                      className="input_form"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div className="form_set">
                <div className="form_group">
                  <div className="form_mid">
                    <label className="label_input" htmlFor="address">
                      * Shipping Address
                    </label>
                    <input
                      className="input_form"
                      type="text"
                      name="address"
                      placeholder="Enter full shipping address"
                      value=""
                    />
                  </div>
                </div>
                <div className="form_group">
                  <div className="form_mid">
                    <label className="label_input" htmlFor="mobile">
                      * Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter full shipping address"
                      value="+63"
                      className="input_form"
                    />
                  </div>
                </div>
              </div>
              <div className="form_set">
                <div className="form_group">
                  <label className="label_input" htmlFor="isint">
                    Shipping Option
                  </label>
                  <div className="form_bot">
                    <input
                      className="check_input"
                      type="checkbox"
                      value={false}
                    />
                    <label className="check_label" htmlFor="isint">
                      <h5 className="check_title">
                        &nbsp; International Shipping&nbsp;
                        <span className="check_sub">7-14 days</span>
                      </h5>
                      <h4>$50.00</h4>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="total">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="table_title">
                        International Shipping: &nbsp;
                      </span>
                    </td>
                    <td>
                      <h4 className="amount">$50.00</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table_title">Subtotal: &nbsp;</span>
                    </td>
                    <td>
                      <h4 className="amount">$157.00</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table_title">Total: &nbsp;</span>
                    </td>
                    <td>
                      <h2 style={{ fontWeight: "500" }}>$157.00</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div className="checking_action">
              <button className="continue" onClick={handleSummary}>
                ← Go Back
              </button>
              <button className="next" onClick={handlePay}>
                Next Step →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
