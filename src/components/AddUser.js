import { useState } from "react";
import Card from "./card/Card";
import classes from './AddUser.module.css';
import Button from "./button/Button";

export default function AddUser(props) {
    const [currentUser, setCurrentUser] = useState('');
    const [currentAge, setCurrentAge] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();

        if (currentUser.trim().length === 0 || currentAge.trim().length === 0) {return;}
        if (+currentAge < 1) {return;}
        
        props.addUser(currentUser, currentAge);

        setCurrentUser('');
        setCurrentAge('');
    }

    function buttonClickHandler(event) {
        props.onClick();
    }

    function userChangeHandler(event) {
        setCurrentUser(event.target.value);
    }

    function ageChangeHandler(event) {
        setCurrentAge(event.target.value);
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
                    <Button type='submit' onClick={buttonClickHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
}