import React from 'react';
import MediaCard from './MediaCard';
import { shallow } from 'enzyme';

test('should render card component', () => {
    // expect(shallow(<MediaCard />).length).toEqual(1);
    expect(shallow(<MediaCard />)).toMatchSnapshot();
});
