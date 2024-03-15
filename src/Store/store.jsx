import { configureStore, combineReducers } from "@reduxjs/toolkit";
import change from "./changeSlice";
import filter from "./filterSlice";
import detail from "./detailSlice";
import sign from "./signSlice";
import basket from "./basketSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import search from "./navsearchSlice";
import account from "./accountSlice";
const reducers = combineReducers({
  change: change,
  filter: filter,
  detail: detail,
  sign: sign,
  basket: basket,
  search: search,
  account: account,
});
const persistconfig = {
  key: "root",
  storage,
  whitelist: ["change", "sign"],
};

const store = configureStore({
  reducer: persistReducer(persistconfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
