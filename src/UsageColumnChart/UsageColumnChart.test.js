import React from 'react';
import { shallow } from 'enzyme';
import UsageColumnChart from './UsageColumnChart';

describe('Core', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      title: 'Some title',
    };
    wrapper = shallow(<UsageColumnChart {...props} />);
  });

  it('renders root element as article tag', () => {
    expect(wrapper.find('article').length).toBe(1);
  });
});
