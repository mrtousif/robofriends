import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
            // color: lightBlue[100],
        },
    },
}));

function SearchBox(props) {
    const { searchChange } = props;
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate>
            <TextField
                id="filled-basic"
                label="Search"
                variant="filled"
                color="primary"
                onChange={searchChange}
            />
        </form>
    );
}

export default SearchBox;
