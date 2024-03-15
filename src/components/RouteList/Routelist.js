import Home from "../../pages/Home/Home";
import Featured from "../../pages/Featured/Featured";
import Recommended from "../../pages/Recommended/Recommended";
import Shop from "../../pages/Shop/Shop";
import SignUp from "../../pages/Sign/SignUp";
import SignIn from "../../pages/Sign/SignIn";
import Notfound from "../../pages/Notfound/Notfound";
import Detail from "../Detail/Detail";
import Shipping from "../../pages/Shipping/Shipping";
import { useRoutes } from "react-router-dom";
import Summary from "../../pages/Summary/Summary";
import Payment from "../../pages/Payment/Payment";
import Account from "../../pages/Account/Account";
function Auth({ children }) {
  const username = localStorage.getItem("token");
  return username ? children : <redirect to="/signup"></redirect>;
}

const route = [
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/feature", element: <Featured /> },
  { path: "/recommend", element: <Recommended /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "*", element: <Notfound /> },
  { path: "/summary", element: <Summary /> },
  { path: "/shipping", element: <Shipping /> },
  { path: "/payment", element: <Payment /> },
  { path: "/account", element: <Account /> },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
];

export default function Wraprouter() {
  const element = useRoutes(route);
  return element;
}
