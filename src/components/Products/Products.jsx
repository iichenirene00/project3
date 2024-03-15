import React from "react";
import "./Product.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
export default function Products({ type, product_info }) {
  let location = useLocation();
  let { id } = useParams();
  let nav = useNavigate();
  let handleClick = (sid) => {
    nav(`/detail/id=${sid}`);
  };
  return (
    <div className="product_wrapper">
      {type == null ? (
        ""
      ) : (
        <div
          className={
            location.pathname === `/detail/${id}` ? "dinfo" : "type_info"
          }
        >
          <h1 className="type_title">{type}</h1>
          <NavLink
            to={type === "Featured Products" ? "/feature" : "/recommend"}
            href=""
            className="all"
          >
            See all
          </NavLink>
        </div>
      )}
      <div
        className={
          location.pathname === `/detail/${id}` ? "dproducts" : "products"
        }
      >
        {product_info.map((product) => (
          <div
            className="product_card"
            key={product.id}
            onClick={() => {
              handleClick(product.id);
            }}
          >
            <div className="card_top">
              <img className="product_pic" src={product.pic} alt="" />
            </div>
            <div className="card_bottom">
              <h2 className="product_h2">{product.h2}</h2>
              <h3 className="product_h3">{product.h3}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
