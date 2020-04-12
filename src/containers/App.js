import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ErrorBoundry from '../components/ErrorBoundry';
// import Scroll from './components/Scroll';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import CardList from './CardList';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         alignItems: 'center',
//     },
//     // paper: {
//     //     padding: theme.spacing(2),
//     //     textAlign: 'center',
//     //     color: theme.palette.text.secondary,
//     // },
// }));

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        };
    }

    onSearchChange = (e) => {
        // put the value in searchField
        this.setState({ searchField: e.target.value });
        console.log(this.state.searchField);
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ robots: users }))
            .catch(console.error('fetch failed'));
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField);
        });

        if (!robots.length) {
            return (
                <Typography variant="h6" color="primary">
                    Loading..
                </Typography>
            );
        }

        return (
            <Container maxWidth="lg">
                <Box align="center" margin={3}>
                    <Typography variant="h4" color="primary">
                        ROBOFRIENDS
                    </Typography>
                    <SearchBox searchChange={this.onSearchChange} />
                </Box>
                {/* <Scroll> */}
                <ErrorBoundry>
                    <CardList arr={filteredRobots} />
                </ErrorBoundry>
                {/* </Scroll> */}
            </Container>
        );
    }
}

export default App;
