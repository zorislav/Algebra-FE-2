import { useState } from "react";
import "./App.css";

function Child({ title, onBtnClick }) {
  const msg = "Goodbye";

  return (
    <>
      <h3>Child: {title}</h3>
      <button onClick={() => onBtnClick(msg)}>Change</button>
    </>
  );
}

function Parent() {
  const [message, setMessage] = useState("Hello World");

  const btnClickHandler = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <>
      <h2>Parent: {message}</h2>
      <Child title="Moje dijete" onBtnClick={btnClickHandler} />
    </>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  function buttonClickHandler() {
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
  }

  return (
    <div className="App">
      <p>Brojac: {counter}</p>
      <button onClick={buttonClickHandler}>Uvecaj brojac</button>
      <Parent />
    </div>
  );
}

export default App;
