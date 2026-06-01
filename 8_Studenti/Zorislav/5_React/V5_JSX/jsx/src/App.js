import "./App.css";
//import React from "react";
const name = "Ivan";

function App() {
  const user = {
    firstName: "Luka",
    lastName: "Horvat",
  };

  const userOutput = `${user.firstName} ${user.lastName}`;

  return (
    <div className="App">
      <p>Hello World!</p>
      <p>Moje ime je: {name}</p>
      <p>
        Moje ime je: {user.firstName} a prezime je: {user.lastName}
      </p>
      <p>Moje ime i prezime je: {userOutput}</p>
    </div>
  );
}

export default App;
