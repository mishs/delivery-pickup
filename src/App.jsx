import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404/404";
import Pickups from "./pages/pickups/pickups";
import axios from "axios";
import UserDetail from "./pages/pickup-detail/user-detail";
import logo from "./assets/logo.svg";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    axios("https://api.staging.pargo.co.za/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        username: "pargoengtest@gmail.com",
        password: "@#$ERS#$%#",
      }),
    }).then((response) => {
      setToken(response.data.access_token);
      localStorage.setItem("c_access_token", response.data.access_token);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="logo_container">
          <img className="logo" src={logo} alt="" />
        </div>
        <Routes>
          <Route path="/" exact element={<Pickups token={token} />} />
          <Route path="/user-detail/:id" exact element={<UserDetail />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
