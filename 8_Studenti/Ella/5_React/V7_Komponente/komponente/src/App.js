import React from "react";
import "./App.css";
import WelcomeFunction from "./components/WelcomeFunction";
import WelcomeClass from "./components/WelcomeClass";

function App() {
  return (
    <div className="App">
      <WelcomeFunction></WelcomeFunction>
      <WelcomeClass></WelcomeClass>
    </div>
  );
}

export default App;
