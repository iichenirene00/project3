import React, { useState } from "react";
import Products from "../Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { sized, choose } from "../../Store/changeSlice";
import "./Detail.css";
import g1 from "../../images/g1.jpeg";
import g2 from "../../images/g2.jpeg";
import g3 from "../../images/g3.jpeg";
import g4 from "../../images/g4.jpeg";
import g6 from "../../images/g6.jpeg";
import rg5 from "../../images/rg5.jpeg";
import { NavLink, useParams } from "react-router-dom";
export default function Detail() {
  let itemlist = useSelector((state) => state.change.itemlist);
  let color = [];
  let dispatch = useDispatch();
  let [cid, setCid] = useState();
  let r_product = [
    { id: 22, pic: g1, h2: "Burnikk", h3: "Sexbomb" },
    { id: 23, pic: g2, h2: "Kibal Batal", h3: "Kibal Black" },
    { id: 24, pic: g3, h2: "Very Nice", h3: "Salt maalat" },
    { id: 25, pic: g4, h2: "Buldit", h3: "Salt maalat" },
    { id: 26, pic: rg5, h2: "Balakubak", h3: "Betsin maalat" },
    { id: 27, pic: g6, h2: "Tiktilaok Manok", h3: "Sexbomb" },
  ];

  let { id } = useParams();
  let c_id = id.substring(3);
  let [size, setSize] = useState("28mm");
  let handleSelect = (e) => {
    setSize(e.target.value);
  };
  let handleColor = (e) => {
    setCid(e.target.id);
    dispatch(choose([+c_id, e.target.id]));
  };
  return (
    <div className="detail_o">
      <div className="detail_wrapper">
        {itemlist.map((item) => (
          <div
            className={`id=${item.id}` === id ? "detail" : "none"}
            key={item.id}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) => {
                return isActive ? "back" : "back";
              }}
            >
              ← Back to shop
            </NavLink>
            <div className="detail_info">
              <div className="detail_left">
                <div className="detail_pic">
                  <img className="item_pic" src={item.pic} alt="" />
                </div>
              </div>

              <div className="detail_mid">
                <img className="mid_pic" src={item.pic} alt="" />
              </div>

              <div className="detail_right">
                <br />
                <span className="stitle">{item.stitle}</span>
                <h1 className="sname">{item.name}</h1>
                <span className="sdetail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat placeat similique dicta nulla praesentium deserunt.
                  Corporis repellendus deleniti dolores eligendi.
                </span>
                <br />
                <br />
                <div className="divider"></div>
                <br />
                <div className="size_frame">
                  <span className="ftitle">Lens Width and Frame Size</span>
                  <br />
                  <br />
                  <select
                    className="size"
                    name=""
                    id=""
                    onChange={handleSelect}
                  >
                    <option value="28mm">--Select Size--</option>
                    <option value="28mm">28mm</option>
                    <option value="36mm">36mm</option>
                    <option value="42mm">42mm</option>
                  </select>
                </div>
                <br />
                <div className="color">
                  <span className="ctitle">Choose Color</span>
                  <br />
                  <br />
                  <div className="color_choose">
                    {(() => {
                      if (`id=${item.id}` === id) {
                        for (var key in item.color) {
                          color.push(item.color[key]);
                        }
                      }
                    })()}
                    {color.map((c) => (
                      <div
                        className="color_item"
                        key={c}
                        id={c}
                        style={{ backgroundColor: `${c}` }}
                        onClick={handleColor}
                      ></div>
                    ))}
                  </div>
                </div>
                <h1 className="iprice">${item.price}</h1>
                <div className="add">
                  <button
                    className={item.isAdded === false ? "dadd" : "dremove dadd"}
                    onClick={() => {
                      dispatch(sized([item.id, size]));
                    }}
                  >
                    {item.isAdded === false
                      ? "Add to basket"
                      : "Remove from basket"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Products type="Recommended" product_info={r_product} />
      </div>
    </div>
  );
}
