import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyColumnChart from './DailyColumnChart';

it(`renders root element as 'article'`, () => {
  expect(shallow(<DailyColumnChart />).find('article').length).toBe(1);
});

describe('This Month', () => {

  it('should display thisMonth section', () => {
    expect(shallow(<DailyColumnChart />).find('.this-month').length).toBe(1);
  });

  it('has metering and forecast info box', () => {
    const thisMonthSection = shallow(<DailyColumnChart />).find('.this-month');

    expect(thisMonthSection.find('.metering').length).toBe(1);
    expect(thisMonthSection.find('.forecast').length).toBe(1);
  });

  describe('Metering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<DailyColumnChart />);
    });

    it('has default props correctly', () => {
      expect(wrapper.prop('metering')).toEqual({
        usage: 0,
        bill: 0,
      });

      expect(wrapper.prop('forecast')).toEqual({
        usage: 0,
        bill: 0,
      });
    });

    it('should display metering info', () => {
      let meteringInfoBox = wrapper.find('.metering');

      expect(meteringInfoBox.find('.metering-usage').text()).toBe('0Wh');
      expect(meteringInfoBox.find('.metering-bill').text()).toBe('0원');

      wrapper.setProps({
        metering: {
          usage: 150000000,
          bill: 15000,
        },
      });

      meteringInfoBox = wrapper.find('.metering');

      expect(meteringInfoBox.find('.metering-usage').text()).toMatch('150kWh');
      expect(meteringInfoBox.find('.metering-bill').text()).toMatch(/15000/);
    });
  });

  describe('Forecast', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<DailyColumnChart />);
    });

    it('should display forecast info', () => {
      let forecastInfoBox = wrapper.find('.forecast');

      expect(forecastInfoBox.find('.forecast-usage').text()).toBe('0Wh');
      expect(forecastInfoBox.find('.forecast-bill').text()).toBe('0원');

      wrapper.setProps({
        forecast: {
          usage: 300000000,
          bill: 30000,
        },
      });

      forecastInfoBox = wrapper.find('.forecast');

      expect(forecastInfoBox.find('.forecast-usage').text()).toMatch('300kWh');
      expect(forecastInfoBox.find('.forecast-bill').text()).toMatch(/30000/);
    });
  });
});
