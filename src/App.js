import React from "react";
import Home from "./pages/home";
import Ftr from "./pages/firstTimeRange";
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/ftr" exact element={<Ftr />}></Route>
      </Routes>   
    </div>
  );
}

export default App;
