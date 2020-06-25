import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

it('should header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});


