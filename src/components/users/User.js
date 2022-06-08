import classes from './User.module.css';
import Card from '../card/Card';

export default function User(props) {
    return (
        <li className={classes.user}>
            <Card>
                <div className={classes.content}>
                    <p>{props.name + ' ' + props.age}</p>
                </div>
            </Card>
        </li>
    );
}