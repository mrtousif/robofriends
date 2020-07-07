import React from 'react';
import Scroll from './Scroll';
import { shallow } from 'enzyme';

it('should Scroll component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
});
