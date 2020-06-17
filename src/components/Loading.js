import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         '& > * + *': {
//             marginLeft: theme.spacing(2),
//         },
//     },
// }));

function Loading() {
    // const classes = useStyles();
    return (
        // <div className={classes.root} /*style={{ justifyContent: 'center' }}*/>
        //     <CircularProgress />
        // </div>
        <div style={{ textAlign: 'center' }}>
            <h2>Loading...</h2>
        </div>
    );
}

export default Loading;
