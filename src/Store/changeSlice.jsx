import { createSlice } from "@reduxjs/toolkit";
import g1 from "../images/g1.jpeg";
import g2 from "../images/g2.jpeg";
import g3 from "../images/g3.jpeg";
import g4 from "../images/g4.jpeg";
import g5 from "../images/g5.jpeg";
import g6 from "../images/g6.jpeg";
import rg5 from "../images/rg5.jpeg";
export const changeSlice = createSlice({
  name: "change",
  initialState: {
    itemlist: [
      {
        id: 21,
        pic: g1,
        name: "Sugar",
        stitle: "Betsin Maalat",
        price: "56.00",
        isAdded: false,
        brand: "bestin",
        quant: 1,
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        size: "28mm",
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 22,
        pic: g2,
        name: "Kulangot",
        stitle: "Salt",
        price: "67.00",
        isAdded: false,
        brand: "salt",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
          c6: "rgb(255, 238, 0)",
          c7: "rgb(0, 240, 8)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 23,
        pic: rg5,
        name: "Titilaok",
        stitle: "Sexbomb",
        price: "78.00",
        isAdded: false,
        brand: "sexbomb",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
          c6: "rgb(3, 215, 252)",
          c7: "rgb(12, 228, 26)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 24,
        pic: g3,
        name: "Very Nice",
        stitle: "Salt maalat",
        price: "79.00",
        isAdded: false,
        brand: "salt",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 25,
        pic: g4,
        name: "Quake Overload",
        stitle: "Yezyow",
        price: "80.00",
        isAdded: false,
        brand: "yezyow",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(0, 77, 132)",
          c4: "rgb(117, 54, 0)",
          c5: "rgb(40, 240, 0)",
          c6: "rgb(255, 10, 10)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 26,
        pic: g6,
        name: "Kutu",
        stitle: "Sexbomb",
        price: "129.00",
        isAdded: false,
        brand: "sexbomb",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 27,
        pic: g5,
        name: "Tuluk",
        stitle: "Black Kibel",
        price: "142.00",
        isAdded: false,
        brand: "black",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(0, 77, 132)",
          c4: "rgb(117, 54, 0)",
          c5: "rgb(255, 10, 10)",
          c6: "rgb(40, 240, 0)",
          c7: "rgb(255, 111, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 28,
        pic: g2,
        name: "Takla Green",
        stitle: "Sexbomb",
        price: "150.00",
        isAdded: false,
        brand: "sexbomb",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 29,
        pic: g1,
        name: "Balakubak",
        stitle: "Betsin Maalat",
        price: "170.00",
        isAdded: false,
        brand: "betsin",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(202, 0, 247)",
          c2: "rgb(45, 72, 210)",
          c3: "rgb(255, 141, 10)",
        },
        c_choose: "rgb(202, 0, 247)",
      },
      {
        id: 30,
        pic: g6,
        name: "Pitaklan",
        stitle: "Black Kibel",
        price: "174.00",
        isAdded: false,
        brand: "black",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(0, 77, 132)",
          c4: "rgb(117, 54, 0)",
          c5: "rgb(253, 138, 8)",
          c6: "rgb(255, 82, 183)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 31,
        pic: rg5,
        name: "Burnikk",
        stitle: "Sexbomb",
        price: "240.00",
        isAdded: false,
        brand: "sexbomb",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(202, 0, 247)",
          c2: "rgb(45, 72, 210)",
          c3: "rgb(255, 141, 10)",
        },
        c_choose: "rgb(202, 0, 247)",
      },
      {
        id: 32,
        pic: g3,
        name: "Sipon Malapot",
        stitle: "Yezyow",
        price: "250.00",
        isAdded: false,
        brand: "yezyow",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(236, 169, 24)",
        },
        c_choose: "rgb(236, 169, 24)",
      },
      {
        id: 33,
        pic: g4,
        name: "Buldit",
        stitle: "Salt Maalat",
        price: "250.00",
        isAdded: false,
        brand: "salt",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 34,
        pic: g5,
        name: "Merry Christmas",
        stitle: "Salt Maalat",
        price: "259.00",
        isAdded: false,
        brand: "salt",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(223, 22, 22)",
        },
        c_choose: "rgb(223, 22, 22)",
      },
      {
        id: 35,
        pic: g1,
        name: "Tilis Malaput",
        stitle: "Bestin",
        price: "340.00",
        isAdded: false,
        brand: "bestin",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 36,
        pic: g6,
        name: "Tilapia",
        stitle: "Sexbomb",
        price: "450.00",
        isAdded: false,
        brand: "sexbomb",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 37,
        pic: g3,
        name: "Kulangot",
        stitle: "Kibal Black",
        price: "674.00",
        isAdded: false,
        brand: "black",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(0, 77, 132)",
          c4: "rgb(117, 54, 0)",
          c5: "rgb(253, 138, 8)",
          c6: "rgb(255, 82, 183)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
      {
        id: 38,
        pic: rg5,
        name: "Sugat",
        stitle: "Yezyow",
        price: "79.00",
        isAdded: false,
        brand: "yezyow",
        quant: 1,
        size: "28mm",
        color: {
          c1: "rgb(0, 0, 0)",
          c2: "rgb(197, 0, 197)",
          c3: "rgb(132, 3, 9)",
          c4: "rgb(0, 77, 132)",
          c5: "rgb(117, 54, 0)",
        },
        c_choose: "rgb(0, 0, 0)",
      },
    ],
    cartlist: [],
  },
  reducers: {
    clicked: (state, action) => {
      for (let i = 0; i < state.itemlist.length; i++) {
        if (action.payload === state.itemlist[i].id) {
          state.itemlist[i].isAdded = !state.itemlist[i].isAdded;
          if (state.itemlist[i].isAdded === true) {
            state.cartlist.push(state.itemlist[i]);
          } else {
            state.cartlist.pop(state.itemlist[i]);
          }
        }
      }
    },
    sized: (state, action) => {
      for (let i = 0; i < state.itemlist.length; i++) {
        if (action.payload[0] === state.itemlist[i].id) {
          state.itemlist[i].isAdded = !state.itemlist[i].isAdded;
          state.itemlist[i].size = action.payload[1];
          if (state.itemlist[i].isAdded === true) {
            state.cartlist.push(state.itemlist[i]);
          } else {
            state.cartlist.pop(state.itemlist[i]);
          }
        }
      }
    },
    removed: (state) => {
      for (let i = 0; i < state.itemlist.length; i++) {
        state.itemlist[i].isAdded = false;
        state.itemlist[i].c_clicked = false;
      }
    },
    cartq_add: (state, action) => {
      for (let i = 0; i < state.cartlist.length; i++) {
        if (action.payload === state.cartlist[i].id) {
          state.cartlist[i].quant += 1;
        }
      }
    },
    cartq_minus: (state, action) => {
      for (let i = 0; i < state.cartlist.length; i++) {
        if (action.payload === state.cartlist[i].id) {
          state.cartlist[i].quant -= 1;
        }
      }
    },
    cart_cross: (state, action) => {
      for (let i = 0; i < state.cartlist.length; i++) {
        if (action.payload === state.cartlist[i].id) {
          state.cartlist.splice(i, 1);
        }
      }
    },
    cleared: (state) => {
      state.cartlist = [];
      for (let i = 0; i < state.itemlist.length; i++) {
        state.itemlist[i].isAdded = false;
        state.itemlist[i].c_clicked = false;
      }
    },
    choose: (state, action) => {
      for (let i = 0; i < state.itemlist.length; i++) {
        if (action.payload[0] === state.itemlist[i].id) {
          for (var key in state.itemlist[i].color) {
            if (state.itemlist[i].color[key] === action.payload[1]) {
              state.itemlist[i].c_choose = action.payload[1];
            }
          }
        }
      }
    },
  },
});

export const {
  clicked,
  removed,
  cartq_minus,
  cartq_add,
  cart_cross,
  cleared,
  sized,
  choose,
} = changeSlice.actions;
export default changeSlice.reducer;
