import User from './User';
import classes from './UserList.module.css';

export default function UserList(props) {
    return (
        <ul className={classes.list}>
            {props.users.map((user) => {
                return [<User 
                    key={user.name} 
                    name={user.name} 
                    age={user.age} />];
            } 
            )}
        </ul>
    );
}