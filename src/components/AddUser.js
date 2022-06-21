import { useState } from "react";
import Card from "./card/Card";
import Button from "./button/Button";
import classes from './AddUser.module.css';
import ErrorModal from './ui/ErrorModal'


export default function AddUser(props) {
    const [currentUser, setCurrentUser] = useState('');
    const [currentAge, setCurrentAge] = useState('');
    const [error, setError] = useState({});
    const [showError, setShowError] = useState(false);

    function onSubmitHandler(event) {
        event.preventDefault();

        if (currentUser.trim().length === 0 || currentAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age.'
            });
            setShowError(true);
            return;
        }
        if (+currentAge < 1) { 
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            setShowError(true);
            return; 
        }

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

    function onClickHandler(event) {
        setShowError(false);
    }

    return (
        <div>
            {showError && <ErrorModal title={error.title} message={error.message} onClick={onClickHandler}/>}
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