import React from "react";
import "../Mid.css";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Man from "../../images/guy.png";
import g1 from "../../images/g1.jpeg";
import g2 from "../../images/g2.jpeg";
import g3 from "../../images/g3.jpeg";
import g4 from "../../images/g4.jpeg";
import g5 from "../../images/g5.jpeg";
import g6 from "../../images/g6.jpeg";
import rg5 from "../../images/rg5.jpeg";
export default function Featured() {
  let f_product = [
    { id: 1, pic: g1, h2: "Burnikk", h3: "Sexbomb" },
    { id: 2, pic: g2, h2: "Kibal Batal", h3: "Kibal Black" },
    { id: 3, pic: g3, h2: "Very Nice", h3: "Salt maalat" },
    { id: 4, pic: g4, h2: "Buldit", h3: "Salt maalat" },
    { id: 5, pic: g5, h2: "Balakubak", h3: "Betsin maalat" },
    { id: 6, pic: g6, h2: "Tiktilaok Manok", h3: "Sexbomb" },
    { id: 7, pic: g1, h2: "Kutu", h3: "Sexbomb" },
    { id: 8, pic: rg5, h2: "Quake Overload", h3: "Yezyow" },
  ];
  return (
    <div className="featured">
      <Header title="Featured Products" pic={Man} />
      <Products product_info={f_product} />
    </div>
  );
}
