import React from 'react';
import { shallow } from 'enzyme';
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

  it('should display header with headerText prop', () => {
    wrapper.setProps({
      headerText: 'This Month',
    });
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('header').text()).toBe('This Month');
  });
});

// describe('section', () => {
//   it('has metering and forecast info box', () => {
//     const thisMonthSection = shallow(<UsageBoard />).find('.this-month');
//
//     expect(thisMonthSection.find('.metering').length).toBe(1);
//     expect(thisMonthSection.find('.forecast').length).toBe(1);
//   });
// });
//
// describe('footer', () => {
//
// });

  // describe('Metering', () => {
  //   let wrapper;
  //
  //   beforeEach(() => {
  //     wrapper = mount(<UsageBoard />);
  //   });
  //
  //   it('has default props correctly', () => {
  //     expect(wrapper.prop('metering')).toEqual({
  //       usage: 0,
  //       bill: 0,
  //     });
  //
  //     expect(wrapper.prop('forecast')).toEqual({
  //       usage: 0,
  //       bill: 0,
  //     });
  //   });
  //
  //   it('should display metering info', () => {
  //     let meteringInfoBox = wrapper.find('.metering');
  //
  //     expect(meteringInfoBox.find('.metering-usage').text()).toBe('0Wh');
  //     expect(meteringInfoBox.find('.metering-bill').text()).toBe('$ 0');
  //
  //     wrapper.setProps({
  //       metering: {
  //         usage: 150000000,
  //         bill: 15000,
  //       },
  //       country: 'KR',
  //       language: 'ko',
  //     });
  //
  //     meteringInfoBox = wrapper.find('.metering');
  //
  //     expect(meteringInfoBox.find('.metering-usage').text()).toBe('150kWh');
  //     expect(meteringInfoBox.find('.metering-bill').text()).toBe('15,000원');
  //   });
  // });
  //
  // describe('Forecast', () => {
  //   let wrapper;
  //
  //   beforeEach(() => {
  //     wrapper = mount(<UsageBoard />);
  //   });
  //
  //   it('should display forecast info', () => {
  //     let forecastInfoBox = wrapper.find('.forecast');
  //
  //     expect(forecastInfoBox.find('.forecast-usage').text()).toBe('0Wh');
  //     expect(forecastInfoBox.find('.forecast-bill').text()).toBe('$ 0');
  //
  //     wrapper.setProps({
  //       forecast: {
  //         usage: 300000000,
  //         bill: 30000,
  //       },
  //       country: 'KR',
  //       language: 'ko',
  //     });
  //
  //     forecastInfoBox = wrapper.find('.forecast');
  //
  //     expect(forecastInfoBox.find('.forecast-usage').text()).toMatch('300kWh');
  //     expect(forecastInfoBox.find('.forecast-bill').text()).toMatch('30,000원');
  //   });
  // });
// });
