import React from 'react';
import { connect } from 'react-redux';
// import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import CounterButton from '../components/CounterButton';
import { setSearchField, requestRobots } from '../actions';

import Scroll from '../components/Scroll';
import Loading from '../components/Loading';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import CardList from './CardList';

// const useStyles = makeStyles((theme) => ({

//     // paper: {
//     //     padding: theme.spacing(2),
//     //     textAlign: 'center',
//     //     color: theme.palette.text.secondary,
//     // },
// }));

// send state as props to components
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    };
};

// state changed trigger action
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: (event) => dispatch(requestRobots()),
    };
};

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //     };
    // }

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        // const { robots } = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        // if (isPending) {
        //     return <Typography variant="h6">Loading..</Typography>;
        // }

        return (
            // <Container maxWidth="xl">
            <div>
                <Box align="center" margin={3}>
                    <Header />
                    <CounterButton />
                    <SearchBox searchChange={onSearchChange} />
                </Box>
                <Scroll>
                    {isPending ? (
                        <Loading />
                    ) : (
                        <ErrorBoundry>
                            <CardList arr={filteredRobots} />
                        </ErrorBoundry>
                    )}
                </Scroll>
            </div>
            // </Container>
        );
    }
}

// connect redux store to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
