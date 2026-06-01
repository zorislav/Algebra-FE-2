import React from "react";
import "./App.css";

function ConditionalRendering(props) {
  const text = props.number === 1 ? <h2>Ivan</h2> : <h2>Luka</h2>;

  //const text = props.number === 1 && <h2>Ivan</h2>;

  return (
    <>
      <h2>Number?</h2>
      {text}
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <ConditionalRendering></ConditionalRendering>
      </div>
    );
  }
}

export default App;
