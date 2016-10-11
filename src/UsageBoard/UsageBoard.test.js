import React from 'react';
import { shallow, mount } from 'enzyme';
import UsageBoard from './UsageBoard';

describe('Frame', () => {
  let wrapper;

  beforeEach(() => {
    const defaultProps = {
      headerText: 'My UsageBoard',
      usage: 0,
      bill: 0,
    };
    wrapper = shallow(<UsageBoard {...defaultProps} />);
  });

  it('renders root element as article tag', () => {
    expect(wrapper.find('article').length).toBe(1);
  });

  it('should display headerText prop', () => {
    wrapper.setProps({
      headerText: 'This Month',
    });
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('header').text()).toBe('This Month');
  });

  it('should display section element', () => {
    expect(wrapper.find('section').length).toBe(1);
  });
});

describe('Electricity Amount', () => {
  let wrapper;

  beforeEach(() => {
    const defaultProps = {
      headerText: 'My UsageBoard',
      usage: 0,
      bill: 0,
    };
    wrapper = mount(<UsageBoard {...defaultProps} />);
  });

  it('should display correct bill', () => {
    wrapper.setProps({
      bill: 15000,
      country: 'KR',
      language: 'ko',
    });

    expect(wrapper.find('section').text()).toBe('15,000원');

    wrapper.setProps({
      country: 'US',
      language: 'ko',
    });

    expect(wrapper.find('section').text()).toBe('$ 15,000');

    wrapper.setProps({
      country: 'JP',
      language: 'ko',
    });

    expect(wrapper.find('section').text()).toBe('¥ 15,000');

    wrapper.setProps({
      country: 'KR',
      language: 'en',
    });

    expect(wrapper.find('section').text()).toBe('₩ 15,000');

    wrapper.setProps({
      country: 'US',
      language: 'en',
    });

    expect(wrapper.find('section').text()).toBe('$ 15,000');

    wrapper.setProps({
      country: 'JP',
      language: 'en',
    });

    expect(wrapper.find('section').text()).toBe('¥ 15,000');

    wrapper.setProps({
      country: 'KR',
      language: 'ja',
    });

    expect(wrapper.find('section').text()).toBe('₩ 15,000');

    wrapper.setProps({
      country: 'US',
      language: 'ja',
    });

    expect(wrapper.find('section').text()).toBe('$ 15,000');

    wrapper.setProps({
      country: 'JP',
      language: 'ja',
    });

    expect(wrapper.find('section').text()).toBe('15,000円');
  });

  it('should display correct usage', () => {
    wrapper.setProps({
      usage: 15000,
    });

    expect(wrapper.find('footer').text()).toBe('15Wh');

    wrapper.setProps({
      usage: 15000000,
    });

    expect(wrapper.find('footer').text()).toBe('15kWh');

    wrapper.setProps({
      usage: 15000000000,
    });

    expect(wrapper.find('footer').text()).toBe('15MWh');
  });
});
