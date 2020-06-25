import React from 'react';
import CounterButton from './CounterButton';
import { shallow } from 'enzyme';

it('should render counterbutton component', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('should render counterbutton component correctly', () => {
    const wrapper = shallow(<CounterButton />);

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');

    expect(wrapper.state()).toEqual({ count: 2 });

    wrapper.find('[id="counter"]').simulate('keypress');

    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual('primary');
});
