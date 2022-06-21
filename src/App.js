import { useState } from 'react';
import AddUser from "./components/AddUser";
import classes from './App.module.css';
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function onAddUser(user, age) {
    setUsers((prevUserList) => {
      return [...prevUserList, {name: user, age: age}];
    })
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
