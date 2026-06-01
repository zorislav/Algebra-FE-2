import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    name: "",
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    alert(`Ime: ${name}`);

    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>Obrasci 1</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Ime:</label>
          <input type="text" value={name} onChange={this.handleChange} />
          <button type="submit">Pošalji</button>
        </form>
      </div>
    );
  }
}

export default App;
