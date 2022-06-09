import { useState } from "react";
import Card from "./card/Card";
import classes from './AddUser.module.css';
import Button from "./button/Button";

export default function AddUser(props) {
    const [currrentUser, setCurrentUser] = useState('');
    const [currrentAge, setCurrentAge] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        // props.addUser({user:'test 01', age: 'test-2'});
    }

    function userChangeHandler(event) {
        setCurrentUser(event.target.value);
    }

    function ageChangeHandler(event) {
        setCurrentAge(event.target.value);
    }

    function onClickHandler(event) {

    }

    return (
        <div>
            <Card>
                <form onSubmit={onSubmitHandler} className={classes.content}>
                    <label>Username</label>
                    <input
                        id='user'
                        value={currrentUser}
                        onChange={userChangeHandler}
                    ></input>
                    <label>Age (Years)</label>
                    <input
                        id='age'
                        value={currrentAge}
                        onChange={ageChangeHandler}
                    ></input>
                    <Button type='submit' onClick={onClickHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
}