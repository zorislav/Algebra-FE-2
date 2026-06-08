import "./App.css";

//HOC
function withLoading(WrappedComponent) {
  return function EnhancedComponent({ isloading, ...props }) {
    if (isloading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

//Standardna komp
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

//Poboljšana komponenta

const EnchancedUserList = withLoading(UserList);

function App() {
  const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Marko" },
  ];

  return (
    <div className="App">
      <h1 className="">App komponenta</h1>
      <UserList users={users} />
      <EnchancedUserList isLoading={true} users={users} />
    </div>
  );
}

export default App;
