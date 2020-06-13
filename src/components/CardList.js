import React from 'react';
import MediaCard from './MediaCard';

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
// }));

function CardList(props) {
    const { arr } = props;
    // const classes = useStyles();

    const cardList = arr.map((item, i) => {
        return (
            <Grid key={i} item>
                <MediaCard id={item.id} email={item.email} name={item.name} />
            </Grid>
        );
    });

    console.log('CardList');

    return (
        <div>
            <Grid container justify="center" spacing={1}>
                {cardList}
            </Grid>
        </div>
    );
}

export default CardList;
