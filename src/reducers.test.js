import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('search robots', () => {
    const initialState = {
        searchField: '',
    };

    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, [])).toEqual({
            searchField: '',
        });
    });

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(
            reducers.searchRobots(initialState, {
                type: CHANGE_SEARCH_FIELD,
                payload: 'abc',
            })
        ).toEqual({
            searchField: 'abc',
        });
    });
});

describe('requestRobots', () => {
    const initialRequestState = {
        isPending: false,
        robots: [],
    };

    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, [])).toEqual(
            initialRequestState
        );
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(
            reducers.requestRobots(initialRequestState, {
                type: REQUEST_ROBOTS_PENDING,
            })
        ).toEqual({
            robots: [],
            isPending: true,
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(
            reducers.requestRobots(initialRequestState, {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: [
                    {
                        id: 1,
                        name: 'Leanne Graham',
                        username: 'Bret',
                        email: 'Sincere@april.biz',
                    },
                ],
            })
        ).toEqual({
            robots: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                },
            ],
            isPending: false,
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(
            reducers.requestRobots(initialRequestState, {
                type: REQUEST_ROBOTS_FAILED,
                payload: 'NOOOOO!!',
            })
        ).toEqual({
            error: 'NOOOOO!!',
            robots: [],
            isPending: false,
        });
    });
});
