import React from "react";
import "../Mid.css";
import Home_header from "../../components/Header/Home_header";
import Products from "../../components/Products/Products";
import g1 from "../../images/g1.jpeg";
import g2 from "../../images/g2.jpeg";
import g3 from "../../images/g3.jpeg";
import g4 from "../../images/g4.jpeg";
import g5 from "../../images/g5.jpeg";
import g6 from "../../images/g6.jpeg";
import rg5 from "../../images/rg5.jpeg";
export default function Home() {
  let f_product = [
    { id: 31, pic: g1, h2: "Burnikk", h3: "Sexbomb" },
    { id: 32, pic: g2, h2: "Kibal Batal", h3: "Kibal Black" },
    { id: 33, pic: g3, h2: "Very Nice", h3: "Salt maalat" },
    { id: 34, pic: g4, h2: "Buldit", h3: "Salt maalat" },
    { id: 35, pic: g5, h2: "Balakubak", h3: "Betsin maalat" },
    { id: 36, pic: g6, h2: "Tiktilaok Manok", h3: "Sexbomb" },
  ];
  let r_product = [
    { id: 27, pic: g1, h2: "Burnikk", h3: "Sexbomb" },
    { id: 28, pic: g2, h2: "Kibal Batal", h3: "Kibal Black" },
    { id: 29, pic: g3, h2: "Very Nice", h3: "Salt maalat" },
    { id: 21, pic: g4, h2: "Buldit", h3: "Salt maalat" },
    { id: 22, pic: rg5, h2: "Balakubak", h3: "Betsin maalat" },
    { id: 23, pic: g6, h2: "Tiktilaok Manok", h3: "Sexbomb" },
  ];
  return (
    <div className="home">
      <Home_header />
      <Products type="Featured Products" product_info={f_product} />
      <Products type="Recommended Products" product_info={r_product} />
    </div>
  );
}
