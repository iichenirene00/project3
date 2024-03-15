import React, { useState } from "react";
import "./Filter.css";
import Slider from "../Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { applyf, removef } from "../../Store/filterSlice";
export default function Shopfilter() {
  let [brand, setBrand] = useState("");
  let [sort, setSort] = useState("");
  let [s_value, setS_value] = useState([67, 674]);
  let filterlist = useSelector((state) => state.filter.filterlist);
  let dispatch = useDispatch();
  function get(value) {
    setS_value(value);
  }
  let handlebrandchange = (e) => {
    setBrand(e.target.value);
  };
  let handlesortchange = (e) => {
    setSort(e.target.value);
  };

  let filter_apply = {
    brand: brand,
    sort: sort,
    price_min: s_value[0],
    price_max: s_value[1],
    applied: true,
    cb: false,
    cp: false,
    cs: false,
  };

  return (
    <div className="filter">
      {filterlist.applied === false ? (
        <div className="filteroverlay">
          <div className="filter_box">
            <div className="box_info">
              <div className="box_top">
                <div className="brand">
                  <p className="btitle">Brand</p>
                  <br />
                  <select
                    className="fbrand"
                    name=""
                    id=""
                    onChange={handlebrandchange}
                  >
                    <option value="all">All brands</option>
                    <option value="salt">Salt Maalat</option>
                    <option value="betsin">Betsin Maalat</option>
                    <option value="black">Black Kibal</option>
                    <option value="sexbomb">Sexbomb</option>
                  </select>
                </div>
                <div className="sortby">
                  <p className="stitle">Sort By</p>
                  <br />
                  <select
                    className="fsort"
                    name=""
                    id=""
                    onChange={handlesortchange}
                  >
                    <option value="none">None</option>
                    <option value="name-asc">Name Ascending A - Z</option>
                    <option value="name-desc">Name Descending Z -A</option>
                    <option value="price-desc">Price High - Low</option>
                    <option value="price-asc">Price Low - High</option>
                  </select>
                </div>
              </div>

              <div className="box_mid">
                <p className="range">Price Range</p>
                <Slider get={get} />
              </div>

              <div className="box_bottom">
                <button
                  className="apply"
                  onClick={() => {
                    dispatch(applyf(filter_apply));
                  }}
                >
                  Apply filters
                </button>
                <button
                  className="reset"
                  onClick={() => {
                    dispatch(removef());
                  }}
                >
                  Reset filters
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
