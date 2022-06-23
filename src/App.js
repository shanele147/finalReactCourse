import "./App.css";
import React, { useState } from "react";
import HomePage from "./pages/HomePage.js";

function App() {
  /* const [shortDomains, setShortDomain] = useState({
    domain1: "shrtco.de",
    domain2: "9qr.de",
    domain3: "shiny.link",
  }); */

  const shortDomains = ["shrtco.de", "9qr.de", "shiny.link"];

  return (
    <div className="App">
      <HomePage shortDomains={shortDomains} />
    </div>
  );
}

export default App;
