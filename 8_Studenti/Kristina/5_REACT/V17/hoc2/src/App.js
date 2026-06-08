import "./App.css";

function Button(props) {
  return <button {...props}></button>;
}
function withColor(Element) {
  return function ({ boja, ...otherProps }) {
    return <Element style={{ backgroundColor: boja }} {...otherProps} />;
  };
}

const ColoredButton = withColor(Button);

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1stil}>Hello</h1>
      <ColoredButton boja="red">Bok ja sam crven </ColoredButton>
      <ColoredButton boja="green">Bok ja sam zelen </ColoredButton>
      <ColoredButton>Bok ja sam bezbojan </ColoredButton>
      <p style={styles.pstil}>To sam ja</p>
    </div>
  );
}

export default App;

const styles = {
  h1stil: {
    color: "blue",
    backgroundColor: "lightgray",
  },
  pstil: {
    color: "yellow",
  },
};
