import "./App.css";
import React from "react";

function App() {
  const name = "Ivan";
  return (
    <React.Fragment>
      <p>Hello World!</p>
      <p>Moje ime je: {name}</p>
    </React.Fragment>
  );
}

export default App;
