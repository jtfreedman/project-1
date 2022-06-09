import { useState } from 'react';
import AddUser from "./components/AddUser";
import classes from './App.module.css';
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  // const users = [
  //   { 
  //     name: "test",
  //     age: "10"
  //   }
  // ]

  function onAddUser(user) {
    setUsers(users.push(user));
  }

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <AddUser addUser={onAddUser}/>
        <UserList users={users}/>
      </div>
    </div>
  );
}

export default App;
