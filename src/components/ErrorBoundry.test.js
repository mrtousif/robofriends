import React from 'react';
import ErrorBoundry from './ErrorBoundry';
import { shallow } from 'enzyme';

it('should not render ErrorBoundry component', () => {
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
});

it('should render ErrorBoundry component', () => {
    expect(
        shallow(<ErrorBoundry />)
            .instance()
            .componentDidCatch()
    ).toMatchSnapshot();
});
