import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { lightBlue } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        height: 320,
        maxWidth: 200,
        backgroundColor: lightBlue[300],
    },
    media: {
        height: 200,
    },
});

function MediaCard(props) {
    const { id, name, email } = props;
    const classes = useStyles();

    return (
        <Card key={id} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://robohash.org/${id}.png?size=200x200`}
                    title="Robot"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MediaCard;
