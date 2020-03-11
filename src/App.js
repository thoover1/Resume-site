import React from "react";
import Header from "./Header/Header";
import background1 from "./background/Resume1.png";
import background2 from "./background/Resume2.png";
import background3 from "./background/Resume3.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <img src={background1} alt="" />
        <img src={background2} alt="" />
        <img src={background3} alt="" />
      </div>
    </div>
  );
}

export default App;
