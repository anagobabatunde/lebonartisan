import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars({ type, message, isOpen }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(isOpen);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            {type == "success" ? (
                <Snackbar open={isOpen} autoHideDuration={200} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        {message}
                    </Alert>
                </Snackbar>
            ) : type == "error" ? (
                <Snackbar open={isOpen} autoHideDuration={200} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        {message}
                    </Alert>
                </Snackbar>
            ) : null}

            {/* <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert> */}
        </div>
    );
}