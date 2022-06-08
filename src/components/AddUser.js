import Card from "./card/Card";
import classes from './AddUser.module.css';
import Button from "./button/Button";

export default function AddUser() {
    function onSubmitHandler() {
        
    }

    return (
        <div>
            <Card>
                <form className={classes.content}>
                    <label>Username</label>
                    <input id='user'></input>
                    <label>Age (Years)</label>
                    <input id='age'></input>
                    <Button onSubmit={onSubmitHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
}