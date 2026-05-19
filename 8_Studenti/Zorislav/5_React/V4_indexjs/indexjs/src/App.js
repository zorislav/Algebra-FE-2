import "./App.css";
// import Komponenta1 from "./components/Komponenta1";
// import Komponenta2 from "./components/Komponenta2";
// import Komponenta3 from "./components/Komponenta3";
// import Komponenta4 from "./components/Komponenta4";
import {
  Komponenta1,
  Komponenta2,
  Komponenta3,
  Komponenta4,
} from "./components";

function App() {
  return (
    <div className="App">
      <h1>Vjezba 4</h1>
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <Komponenta4 />
    </div>
  );
}

export default App;
