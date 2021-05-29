import React from "react";
import "./App.css";
import world from "../assets/world.png";

export const App = () => {
  return (
    <main>
      <h1>Hello</h1>
      <img id="world" alt="world" width="25" height="25" src={world} />
    </main>
  );
};

export default App;
