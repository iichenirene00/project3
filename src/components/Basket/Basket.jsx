import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import BasketInfo from "./Basket_info";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../Store/basketSlice";
export default function Basket() {
  let control = useSelector((state) => state.basket.control);
  let cartlist = useSelector((state) => state.change.cartlist);
  let anchor = "right";
  let dispatch = useDispatch();

  let s1 = {
    position: "absolute",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    color: "white",
    right: "0px",
    top: "0px",
    zIndex: "995",
    textAlign: "center",
    fontSize: "11px",
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "right" ? 600 : "", height: "100%" }}
      role="presentation"
      onKeyDown={() => {
        dispatch(toggleDrawer(false));
      }}
    >
      <BasketInfo />
    </Box>
  );
  return (
    <div className="basket">
      <React.Fragment key={anchor}>
        <Button
          style={{ fontSize: "2rem", position: "relative" }}
          onClick={() => {
            dispatch(toggleDrawer(true));
          }}
        >
          🛒
          {cartlist.length === 0 ? (
            ""
          ) : (
            <div className="add_num" style={s1}>
              {cartlist.length}
            </div>
          )}
        </Button>
        <Drawer
          anchor={anchor}
          open={control}
          onClose={() => {
            dispatch(toggleDrawer(false));
          }}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
