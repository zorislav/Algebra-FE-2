import logo from "./logo.svg";
import "./App.css";

//HOC funkcija
function withLoading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

//Standardna komponenta:
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

//Poboljšana komponenta:
const EnhancedUserList = withLoading(UserList);

function App() {
  const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Marko" },
  ];

  return (
    <div className="App">
      <h1>App komponenta</h1>
      <UserList users={users} />
      <EnhancedUserList isLoading={true} users={users} />
    </div>
  );
}

export default App;
