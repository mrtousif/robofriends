import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

it('should render cardlist component', () => {
    // expect(shallow(<CardList />).length).toEqual(1);
    const mockRobots = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
        },
    ];

    expect(shallow(<CardList arr={mockRobots} />)).toMatchSnapshot();
});
