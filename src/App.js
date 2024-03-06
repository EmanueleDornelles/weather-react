import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/EmanueleDornelles/weather-react.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Emanuele, Jhonatan e Lucas
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
