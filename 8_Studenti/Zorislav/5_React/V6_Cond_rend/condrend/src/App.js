import React from "react";
import "./App.css";

function ConditionalRendering(props) {
  const text = props.number === 1 ? <h2>Ivan</h2> : <h2>Luka</h2>;

  //const text = props.number === 1 && <h2>Ivan</h2>;

  const { number } = props;

  return (
    <>
      <h2>Number?</h2>
      {text}
      {number === 2 && <h3>Luka</h3>}
      {props.number === 2 && <h3>Luka</h3>}
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <ConditionalRendering number={2} />
      </div>
    );
  }
}

export default App;
