import Komponenta1 from "./components/komponenta1.jsx";
import "./App.css";
import { Provider } from "./context/context.js";
import { useState } from "react";
function App() {
  const [ number, setNumber ] = useState(0);

  function textCangeHandler(event) {
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
          <input type="number" value={number} onChange={textCangeHandler} />
        </label>
        <Komponenta1 />
      </Provider>
    </div>
  );
}

export default App;
