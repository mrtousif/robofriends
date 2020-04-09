import React from 'react';
import robots from './robots';
import MediaCard from './MediaCard';

import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // },
}));

function App() {
    const classes = useStyles();

    const cardList = robots.map((robot) => {
        return (
            <Grid item xs>
                <MediaCard
                    id={robot.id}
                    email={robot.email}
                    name={robot.name}
                />
            </Grid>
        );
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {cardList}
            </Grid>
        </div>
    );
}

export default App;
