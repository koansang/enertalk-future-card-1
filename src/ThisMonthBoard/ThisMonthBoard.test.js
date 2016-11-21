import React from 'react';
import { shallow } from 'enzyme';
import ThisMonthBoard from './ThisMonthBoard';

describe('Frame', () => {
  it('renders article element as root', () => {
    expect(shallow(<ThisMonthBoard />).find('article').length).toBe(1);
  });

  it('should two UsageBoard elements', () => {
    expect(shallow(<ThisMonthBoard />).find('UsageBoard').length).toBe(2);
  });
});
