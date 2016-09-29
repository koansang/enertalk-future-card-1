import React from 'react';
import {shallow, mount} from 'enzyme';

import RealtimeUsageChart from './RealtimeUsageChart';
import RealtimeUsage from './RealtimeUsage/RealtimeUsage';

describe('RealtimeUsageChart', () => {
    let wrapper;

    beforeEach ( () => {
        wrapper = shallow(<RealtimeUsageChart/>);
    });

    it('should render RealtimeUsageChart', () => {
        expect(wrapper.find(RealtimeUsage).length).toEqual(1);
    });

    it('default state value', () => {
        expect(wrapper.state().usage).toEqual(0);
    });

    it('call generateRandomValue', () => {
        wrapper.instance().generateRandomValue();
        expect(wrapper.state().usage).toBeGreaterThanOrEqual(0);
    });
});