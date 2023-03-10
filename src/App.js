import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";

const Shop = () => {
  return <h1>im a shop page</h1>
}

const App = () => {
  return(
    <Routes>
      <Route path="/home" element={<Home/>}>
        <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
  );
}

export default App;
