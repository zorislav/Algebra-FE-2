import Komponenta1 from "./components/Komponenta1.jsx";
import { Provider } from "./context/context.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  function textChangeHandler(event) {
    setNumber(event.target.value);
  }

  return (
    <div className="App">
      <Provider
        value={{
          text: "Komponenta4 je najbolja",
          number: number,
          reset: () => setNumber(0),
        }}
      >
        <h1>App komponenta</h1>
        <label>
          Postavi u kontekst:
          <input type="number" value={number} onChange={textChangeHandler} />
        </label>
        <Komponenta1 />
      </Provider>
    </div>
  );
}

export default App;
