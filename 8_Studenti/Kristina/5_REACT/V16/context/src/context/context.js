import React from "react";
import Komponenta4 from "../components/komponenta4.jsx";

const Context = React.createContext();

const Provider = Context.Provider;

const Consumer = Context.Consumer;
export { Provider, Consumer };

export default Context;
