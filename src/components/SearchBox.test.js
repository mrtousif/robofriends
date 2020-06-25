import React from 'react';
import SearchBox from './SearchBox';
import { shallow } from 'enzyme';

it('should render searchbox component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
});
