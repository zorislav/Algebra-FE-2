import { useState, useEffect } from "react";
import "./App.css";

const NASA_API_KEY = "hsPcJWuv2dACNjfXlhk1HPcbGm0VYNGHYZcdRrCg";

function App() {
  const [data, setData] = useState(null);

  async function getData() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`,
    );
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return (
      <div className="App">
        <p>Loading NASA data...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>NASA Picture of the day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.title} width={500} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
