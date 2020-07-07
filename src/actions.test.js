import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';

import * as actions from './actions';

it('should return an action to search robots', () => {
    const text = 'woo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('should request the api for robots', () => {
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    };

    expect(actions.requestRobots()).toEqual();
});
