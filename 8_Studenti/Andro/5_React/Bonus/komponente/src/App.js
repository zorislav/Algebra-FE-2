import React, { useState } from "react";
import "./App.css";

class ClassKomponenta extends React.Coomponent {
  state = {
    classStanje: "Class pocetno stanje",
  };

  btnClickHandler() {
    this.setState({ classStanje: "Class novo stanje" });
  }

  render() {
    const { classStanje } = this.state;
    const { ime, starost, grad, children, onAppSt } = this.props;

    return (
      <>
        <br />
        {classStanje}
        <h2>{children} komponenta</h2>
        <p>Ime: {ime}</p>
        <p>Starost: {starost}</p>
        <p>Grad: {grad}</p>
        <button onClick={this.btnClickHandler.bind(this)}>
          Promijeni lokalno stanje
        </button>
        <button
          onClick={(event) =>
            onAppSt("App novo stanje iz class komponente", event)
          }
        >
          Promijeni App stanje
        </button>
      </>
    );
  }
}

function FunckijskaKomponenta({ ime, starost, grad, children, onAppSt }) {
  const [fnStanje, setFnStanje] = useState("Fn pocetno stanje");

  function btnClickHandler() {
    setFnStanje("fn novo stanje");
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
        onClick={(event) =>
          onAppSt("App novo stanje iz funkcijske komponente", event)
        }
      >
        Promijeni App stanje
      </button>
    </>
  );
}

function App() {
  const [appStanje, setAppStanje] = useState("App pocetno stanje");

  function appStanjeHandler(novoStanje, event) {
    setAppStanje(novoStanje);
    console.log(event.target);
  }

  return (
    <div className="App">
      {appStanje}
      <h1>App komponenta</h1>
      <FunckijskaKomponenta
        ime="Ivica"
        starost={25}
        grad="Osijek"
        onAppSt={appStanjeHandler}
      >
        Funkcijska
      </FunckijskaKomponenta>
      <ClassKomponenta
        ime="Marica"
        starost={33}
        grad="Pula"
        onAppSt={appStanjeHandler}
      >
        Class
      </ClassKomponenta>
    </div>
  );
}

export default App;
