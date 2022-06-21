import { useState } from 'react';
import AddUser from "./components/AddUser";
import classes from './App.module.css';
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  function onAddUser(user, age) {
    setUsers((prevUserList) => {
      return [...prevUserList, {name: user, age: age}];
    })
  }

  function onClickHandler(event) {
    setButtonClick(true);
  }

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <AddUser addUser={onAddUser} onClick={onClickHandler}/>
        <UserList users={users}/>
      </div>
    </div>
  );
}

export default App;
