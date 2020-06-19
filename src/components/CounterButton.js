import React from 'react';
import { Button } from '@material-ui/core';

class CounterButton extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) return true;
        return false;
    }

    updateCount = () => {
        this.setState((state) => {
            return { count: state.count + 1 };
        });
    };

    render() {
        return (
            <Button
                variant="contained"
                color="primary"
                onClick={this.updateCount}
            >
                Count: {this.state.count}
            </Button>
        );
    }
    /* <Typography variant="h2">ROBOFRIENDS</Typography> */
}

export default CounterButton;
