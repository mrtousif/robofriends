import React from "react";
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";

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
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                height: "50%",
            }}
        >
            <CircularProgress color="secondary" />
        </div>
    );
}

export default Loading;
