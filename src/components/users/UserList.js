import User from './User';
import classes from './UserList.module.css';
//import { useState } from 'react';

export default function UserList(props) {
    //const [currentList, setCurrentList] = useState('');

    return (
        <ul className={classes.list}>
            {props.users.map(user => 
            <User 
                key={user.name} 
                name={user.name} 
                age={user.age} />)}
        </ul>
    );
}