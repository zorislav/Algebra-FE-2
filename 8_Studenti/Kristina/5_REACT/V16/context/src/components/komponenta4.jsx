import { Consumer } from "../context/context.js";
import { useContext } from "react";
import Context from "../context/context.js";
export default function Komponenta4() {
  const context = useContext(Context);
  const { text, number, reset } = context;
  const edittext = `${text}preko funkcije, aposlani broj je ${number}`;
  return (
    <>
      <h2>Komponenta 4</h2>
      <Consumer>
        {(ctx) => (
          <p>
            {ctx.text}-{ctx.number}
          </p>
        )}
      </Consumer>
      <p>{edittext}</p>
      <button onClick={reset}>Reset</button>
    </>
  );
}
