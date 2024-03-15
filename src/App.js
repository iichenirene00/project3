// import Home from "./pages/Home/Home";
// import Featured from "./pages/Featured/Featured";
// import Recommended from "./pages/Recommended/Recommended";
import Nav from "./components/Nav/Nav";
// import Shop from "./pages/Shop/Shop";
// import SignUp from "./pages/Sign/SignUp";
// import SignIn from "./pages/Sign/SignIn";
// import Notfound from "./pages/Notfound/Notfound";
import Routelist from "./components/RouteList/Routelist";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routelist />
      </BrowserRouter>
    </div>
  );
}

export default App;
