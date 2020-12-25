import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions';

// send state as props to components
const mapStateToProps = (state) => {
    const {robots, isPending, error} = state.requestRobots;

    return {
        searchField: state.searchRobots.searchField,
        robots: robots,
        isPending: isPending,
        error: error,
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
    render() {
        return <MainPage {...this.props} />;
    }
}

// connect redux store to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
