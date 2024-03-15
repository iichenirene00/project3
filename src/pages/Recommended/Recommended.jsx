import React from "react";
import "../Mid.css";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import girl2 from "../../images/girl2.png";
import g1 from "../../images/g1.jpeg";
import g2 from "../../images/g2.jpeg";
import g3 from "../../images/g3.jpeg";
import g4 from "../../images/g4.jpeg";
import rg5 from "../../images/rg5.jpeg";
import g6 from "../../images/g6.jpeg";
export default function Recommended() {
  let r_product = [
    { id: 7, pic: g1, h2: "Burnikk", h3: "Sexbomb" },
    { id: 8, pic: g2, h2: "Kibal Batal", h3: "Kibal Black" },
    { id: 9, pic: g3, h2: "Very Nice", h3: "Salt maalat" },
    { id: 10, pic: g4, h2: "Buldit", h3: "Salt maalat" },
    { id: 11, pic: rg5, h2: "Balakubak", h3: "Betsin maalat" },
    { id: 12, pic: g6, h2: "Tiktilaok Manok", h3: "Sexbomb" },
  ];
  return (
    <div className="recommended">
      <Header title="Recommended Products" pic={girl2} />
      <Products product_info={r_product} />
    </div>
  );
}
