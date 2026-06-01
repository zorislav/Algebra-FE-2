import React, { useState, useEffect } from "react";
import "./App.css";

class ClassKomponenta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    };
  }

  getList = () => {
    fetch("https://api.github.com/users/facebook/repos")
      .then((response) => response.json())
      .then((responseData) => this.setState({ repos: responseData }));
  };

  UNSAFE_componentWillMount() {
    console.log("Class - componentWillMount");
  }

  componentDidMount() {
    console.log("Class - componentDidMount");
    this.getList();
  }

  componentDidUpdate() {
    console.log("Class - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Class - componentWillUnmount");
  }

  render() {
    const { repos } = this.state;

    return (
      <>
        <h2>Class komoponenta</h2>
        {repos.map((repo, index) => (
          <div key={index}>
            <strong>{repo.name}</strong>
          </div>
        ))}
      </>
    );
  }
}

function FnKomponenta() {
  const [repos, setRepos] = useState([]);

  function getFnList() {
    fetch("https://api.github.com/users/facebook/repos")
      .then((response) => response.json())
      .then((responseData) => setRepos(responseData));
  }

  useEffect(() => {
    console.log("Fn - componentDidMount");
    getFnList();

    return () => {
      console.log("Fn - componentWillUnmount");
    };
  }, []);
  useEffect(() => {
    console.log("Fn - componentDidMount + componentDidUpdate");
  });

  return (
    <>
      <h2> Funkcijska komponenta</h2>
      {repos.map((repo, index) => (
        <div key={index}>
          <strong>{repo.name}</strong>
        </div>
      ))}
    </>
  );
}

function App() {
  const [showClass, setShowClass] = useState(true);
  const [showFn, setShowFn] = useState(true);

  const toggleClassHandler = () => {
    setShowClass((s) => !s);
  };

  const toggleFnHandler = () => {
    setShowFn((s) => !s);
  };

  // return (
  //   <div className="App">
  //     <h1>App komponenta</h1>
  //     <button onClick={toggleClassHandler}>Toggle Class</button>
  //     {showClass && <ClassKomponenta />}
  //   </div>
  // );
  return (
    <div className="App">
      <h1>App komponenta</h1>
      <button onClick={toggleFnHandler}>Toggle Fn</button>
      {showFn && <FnKomponenta />}
    </div>
  );
}

export default App;
