import React from 'react';
import { shallow, mount } from 'enzyme';

import RealtimeUsage from './RealtimeUsage';

describe('<RealtimeUsage/>', () => {
    
    it('should render <div/> component', () => {
        const wrapper = shallow(<RealtimeUsage/>);

        expect(wrapper.find('div.realtime-label').length).toEqual(1);
    });

    it('should have <span/> component', () => {
        const wrapper = shallow(<RealtimeUsage/>);

        expect(wrapper.find('span.value').length).toEqual(1);
    });

    it('check props.usage', () => {
        const wrapper = shallow(<RealtimeUsage usage={0}/>);

        expect(wrapper.instance().props.usage).toEqual(0);
    })
});