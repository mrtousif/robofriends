import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import { lightBlue } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '40ch',
//             // color: lightBlue[100],
//         },
//     },
// }));

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '8px',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '40ch',
        height: 50,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

function SearchBox(props) {
    const { searchChange } = props;
    const classes = useStyles();
    // console.log('SearchBox');

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search robots"
                inputProps={{ 'aria-label': 'search robots' }}
                onChange={searchChange}
            />
        </Paper>

        // <form className={classes.root} noValidate>
        //     <TextField
        //         id="filled-basic"
        //         label="Search"
        //         aria-label="Search Robots"
        //         variant="outlined"

        //         onChange={searchChange}
        //     />
        // </form>
    );
}

export default SearchBox;
