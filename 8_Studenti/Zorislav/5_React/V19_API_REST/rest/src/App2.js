import React from "react";
import "./App.css";

const NASA_API_KEY = "hsPcJWuv2dACNjfXlhk1HPcbGm0VYNGHYZcdRrCg";

class App extends React.Component {
  state = {
    title: null,
    url: null,
    explanation: null,
    isFetching: false,
  };

  componentDidMount() {
    this.setState({ ...this.state, isFetching: true });

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      .then((response) => response.json())
      .then((responseData) =>
        this.setState({
          title: responseData.title,
          url: responseData.url,
          explanation: responseData.explanation,
          isFetching: false,
        }),
      );
  }

  render() {
    const { title, url, explanation, isFetching } = this.state;

    return (
      <div className="App">
        {isFetching && <p>Loading NASA data...</p>}
        {!isFetching && <h1>NASA Picture of the day</h1>}
        <h3>{title}</h3>
        <img src={url} alt={title} width={500} />
        <p>{explanation}</p>
      </div>
    );
  }
}

export default App;
