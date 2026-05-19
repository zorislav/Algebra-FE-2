import "./App.css";
import Person from "./person";
import { sum } from "./util";
import { broj1, broj2 } from "./util";

import Osoba from "./person";
import { sum as zbroj } from "./util";
import * as brojevi from "./util";

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>{sum(5, 3)}</p>
      <p>{sum(broj1, broj2)}</p>
      <p>{Osoba.name}</p>
      <p>{zbroj(5, 3)}</p>
      <p>{sum(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
