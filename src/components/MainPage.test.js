import React from 'react';
// import { render } from '@testing-library/react';
import { render, shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true,
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});

it('should render successfully', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should filter robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
        ],
        searchField: 'j',
        isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);

    expect(wrapper2.instance().filteredRobots()).toEqual([]);
});
