import React, { useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clicked } from "../../Store/changeSlice";
import { rbrand, rprice, rsort, rpill } from "../../Store/filterSlice";
export default function Item({ shop_item, f2 }) {
  let filterlist = useSelector((state) => state.filter.filterlist);
  let dispatch = useDispatch();
  let card_num = 0;
  let [more, setMore] = useState(true);
  let searched = useSelector((state) => state.search.searched);
  let si = useSelector((state) => state.search.search_input);
  let nav = useNavigate();
  let handlenav = (id) => {
    nav(`/detail/id=${id}`);
  };
  return (
    <div className="item_wrapper">
      {searched ? (
        <div className="filter_header">
          <div className="header_title">
            <h5 className="found">
              Found {shop_item.length} product with keyword {si}
            </h5>
          </div>
        </div>
      ) : (
        ""
      )}
      {filterlist.applied === true ? (
        <div className="applied">
          <div className="filter_header">
            <div className="header_title">
              <h5 className="found">Found {shop_item.length} product</h5>
            </div>
          </div>
          <div className="filter_applied">
            {filterlist.cb === true ? (
              ""
            ) : (
              <div className="pill">
                <span className="db">Brand</span>
                <div className="wpill">
                  <h5 className="pill_content">
                    {filterlist.brand}{" "}
                    <span
                      onClick={() => {
                        dispatch(rbrand());
                        dispatch(rpill("b"));
                      }}
                    >
                      ⓧ
                    </span>
                  </h5>
                </div>
              </div>
            )}
            {filterlist.cp === true ? (
              ""
            ) : (
              <div className="pill">
                <span className="db">Price Range</span>
                <div className="wpill">
                  <h5 className="pill_content">
                    ${filterlist.price_min} - ${filterlist.price_max}{" "}
                    <span
                      onClick={() => {
                        dispatch(rprice());
                        dispatch(rpill("p"));
                      }}
                    >
                      ⓧ
                    </span>
                  </h5>
                </div>
              </div>
            )}
            {filterlist.cs === true ? (
              ""
            ) : (
              <div className="pill">
                <span className="db">Sort By</span>
                <div className="wpill">
                  <h5 className="pill_content">
                    {filterlist.sort}{" "}
                    <span
                      onClick={() => {
                        dispatch(rsort());
                        dispatch(rpill("s"));
                      }}
                    >
                      ⓧ
                    </span>
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      {f2.length === 0 ? (
        <div className="loader">
          <h2 className="ltext">No product found</h2>
        </div>
      ) : (
        <div className="item_list">
          {shop_item.map((shopi) => (
            <div
              className={
                card_num > 12 && more === true ? "card card_noshow" : "card"
              }
              key={shopi.id}
            >
              {shopi.isAdded === true ? <div className="chosen">✓</div> : ""}
              <div className="card_num">{card_num++}</div>
              <div
                className="item_info"
                onClick={() => {
                  handlenav(shopi.id);
                }}
              >
                <div className="item_img">
                  <img className="glasses" src={shopi.pic} alt="" />
                </div>
                <div className="item_detail">
                  <h5>{shopi.name}</h5>
                  <p>{shopi.stitle}</p>
                  <h4>$ {shopi.price}</h4>
                </div>
              </div>
              <button
                className={shopi.isAdded === false ? "add" : "remove"}
                onClick={() => {
                  dispatch(clicked(shopi.id));
                }}
              >
                {shopi.isAdded === false ? (
                  <p className="added"> Add to basket</p>
                ) : (
                  <p className="added"> Remove from basket</p>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
      {more === true ? (
        <div className={searched ? "no_more" : "show"}>
          <button
            className="show_more"
            onClick={() => {
              setMore(!more);
            }}
          >
            Show More Items
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
