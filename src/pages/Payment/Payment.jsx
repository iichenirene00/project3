import React from "react";
import Checkout_nav from "../../components/Checkout/Checkout_nav";
import "../Mid.css";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
export default function Payment() {
  let nav = useNavigate();
  let handleBack = () => {
    nav("/shipping");
  };
  return (
    <div className="payment">
      <div className="payment_cart">
        <Checkout_nav />
        <div className="step3">
          <h3 className="pay_title">Payment</h3>
          <div className="form_set">
            <div className="form_group">
              <label className="label_input" htmlFor="isint">
                Payment
              </label>
              <div className="form_bot">
                <input className="check_input" type="checkbox" value={false} />
                <label className="check_label" htmlFor="isint">
                  <div className="left">
                    <h5 className="check_title">Credit Card</h5>
                    <div className="check_sub">
                      {" "}
                      Pay with Visa, Master Card and other debit or credit card
                    </div>
                  </div>
                  <div className="right">
                    <div className="pay_img visa_img"></div>
                    &nbsp;
                    <div className="pay_img mastercard_img"></div>
                  </div>
                </label>
              </div>
              <div className="form_bot">
                <input className="check_input" type="checkbox" value={false} />
                <label className="check_label" htmlFor="isint">
                  <div className="left">
                    <h5 className="check_title">Paypal</h5>
                    <div className="check_sub">
                      {" "}
                      Pay easily, fast and secure with PayPal.
                    </div>
                  </div>
                  <div className="right">
                    <div className="pay_img paypal_img"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <br />
          <div className="checking_action">
            <button className="continue" onClick={handleBack}>
              ← Go Back
            </button>
            <button className="next">✓ Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
