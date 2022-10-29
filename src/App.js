// import logo from './logo.svg';
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
