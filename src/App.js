import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
