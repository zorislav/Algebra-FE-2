import "./App.css";
import randomstring from "randomstring";
import { v4 as uuidv4 } from "uuid";

function App() {
  const id = randomstring.generate(7);
  const id2 = uuidv4();

  return (
    <div className="App">
      <p className="">Moja aplikacija</p>
      <p className="">Moj randomstring :{id}</p>
      <p className="">Moj randomstring :{id2}</p>
    </div>
  );
}

export default App;
