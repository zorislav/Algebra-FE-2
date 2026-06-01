import React from "react";
import "./App.css";
import { UserFunction } from "./user";
import { UserClass } from "./user";
import { UserChildren } from "./user";

const users = [
  {
    name: "Ivan",
    years: 30,
  },
  {
    name: "Marko",
    years: 25,
  },
  {
    name: "Ana",
    years: 25,
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction
          ime={users[0].name}
          godine={users[0].years}
        ></UserFunction>
        <UserClass ime={users[0].name} godine={users[0].years}></UserClass>
        <UserChildren name={users[2].name} years={users[2].years}>
          A hobi mi je skijanje.
        </UserChildren>
      </div>
    );
  }
}

export default App;
