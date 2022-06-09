import { useState } from "react";
import Card from "./card/Card";
import classes from './AddUser.module.css';
import Button from "./button/Button";

export default function AddUser(props) {
    const [currentUser, setCurrentUser] = useState('');
    const [currentAge, setCurrentAge] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        props.addUser({user: currentUser, age: currentAge});
    }

    function userChangeHandler(event) {
        setCurrentUser(event.target.value);
    }

    function ageChangeHandler(event) {
        setCurrentAge(event.target.value);
    }

    function onClickHandler(event) {
        if (currentUser.trim() === "" || currentAge.trim() === "") {return}
        if (currentAge < 1) {return}
    }

    return (
        <div>
            <Card>
                <form onSubmit={onSubmitHandler} className={classes.content}>
                    <label>Username</label>
                    <input
                        id='user'
                        value={currentUser}
                        onChange={userChangeHandler}
                    ></input>
                    <label>Age (Years)</label>
                    <input
                        id='age'
                        value={currentAge}
                        onChange={ageChangeHandler}
                    ></input>
                    <Button type='submit' onClick={onClickHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
}