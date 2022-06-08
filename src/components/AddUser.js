import Card from "./card/Card";
import classes from './AddUser.module.css';
import Button from "./button/Button";

export default function AddUser() {
    return (
        <div>
            <Card>
                <div className={classes.content}>
                    <h1>Username</h1>
                    <input />
                    <h1>Age (Years)</h1>
                    <input />
                    <Button>Add User</Button>
                </div>
            </Card>
        </div>
    );
}