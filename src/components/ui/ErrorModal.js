import Button from "../button/Button";

import classes from './ErrorModal.module.css'

export default function ErrorModal(props) {
    return (
        <div className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button>Okay</Button>
            </footer>
        </div>
    );
}