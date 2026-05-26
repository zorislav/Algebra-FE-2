import React, { useState } from "react";
import "./App.css";

class ClassKomponenta extends React.Component {
  render() {
    return (
      <>
        <h2>Class Komponenta</h2>
      </>
    );
  }
}

function FunkcijskaKomponenta({ ime, starost, grad, children, onAppSt }) {
  const [fnStanje, setFnStanje] = useState("Fn pocetno stanje");

  function btnClickHandler() {
    setFnStanje("Fn novo stanje");
  }

  return (
    <>
      {fnStanje}
      <h2>{children} komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad}</p>
      <button onClick={btnClickHandler}>Promijeni lokalno stanje</button>
      <button
        onClick={(event) => onAppSt("App novo stanje iz funkcijske komponente")}
      >
        Promijeni App stanje
      </button>
    </>
  );
}

function App() {
  const [appStanje, setAppStanje] = useState("App pocetno stanje");

  function appStanjeHandler(novoStanje) {
    setAppStanje(novoStanje);
  }

  return (
    <div className="App">
      {appStanje}
      <h1>App komponenta</h1>
      <FunkcijskaKomponenta
        ime="Ivica"
        starost={25}
        grad="Osijek"
        onAppSt={appStanjeHandler}
      >
        Funkcijska
      </FunkcijskaKomponenta>
      <ClassKomponenta />
    </div>
  );
}

export default App;
