import AddUser from "./components/AddUser";
import classes from './App.module.css';
import UserList from "./components/users/UserList";

function App() {
  const users = [
    { 
      name: "test",
      age: "10"
    }
  ]
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <AddUser />
        <UserList users={users}/>
      </div>
    </div>
  );
}

export default App;
