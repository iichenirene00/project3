import React from "react";
import Item from "../../components/Item/Item";
import "../Mid.css";
import { useSelector } from "react-redux";
export default function Shop() {
  let filterlist = useSelector((state) => state.filter.filterlist);
  let itemlist = useSelector((state) => state.change.itemlist);
  let search = useSelector((state) => state.search.search_input);

  let filter_list1 = itemlist.filter(function (item) {
    if (item.brand === filterlist.brand) {
      return item;
    } else if (filterlist.brand === "all") {
      return item;
    }
  });

  let filter_list2 = itemlist.filter(function (item) {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  filter_list1 = filter_list1.filter(function (item) {
    if (
      item.price >= filterlist.price_min &&
      item.price <= filterlist.price_max
    ) {
      return item;
    }
  });

  if (filterlist.sort === "price-desc") {
    filter_list1 = filter_list1.sort((a, b) => b.price - a.price);
  } else if (filterlist.sort === "price-asc") {
    filter_list1 = filter_list1.sort((a, b) => a.price - b.price);
  } else if (filterlist.sort === "name-asc") {
    filter_list1 = filter_list1.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filterlist.sort === "name-desc") {
    filter_list1 = filter_list1.sort((a, b) => b.name.localeCompare(a.name));
  }

  let renderlist = [];
  if (search.length !== 0) {
    renderlist = filter_list2;
  } else {
    renderlist = filter_list1;
  }

  return (
    <div className="shop">
      <Item shop_item={renderlist} f2={filter_list2} />
    </div>
  );
}
