import React from "react";
import Home from "./pages/home";
import Toolbar from "./components/toolbar.js";
import { Route, Routes} from "react-router-dom";
import Account from "./pages/account";
import Footer from "./components/footer";

function App() {

 
  return (
    <div className="App">
      {/* check if at the account page */}
      {/* { location.pathname === "/account" ? <></>: <Toolbar /> } */}
      <Toolbar />
      
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/account" exact element={<Account />} ></Route>
        </Routes>   
      <Footer />
    </div>
  );
}

export default App;
