import React from 'react';
import { shallow } from 'enzyme';
import ElectricityUnit, { filterFloatingPoint } from './ElectricityUnit';

describe('ElectricityUnit', () => {
  it('should render inline element', () => {
    expect(shallow(<ElectricityUnit />).every('span')).toBeTruthy();
  });

  it('renders 3 span with correct class name', () => {
    const wrapper = shallow(<ElectricityUnit />);

    expect(wrapper.find('span').length).toBe(3);
    expect(wrapper.find('.amount').length).toBe(1);
    expect(wrapper.find('.unit').length).toBe(1);
  });

  it('should display Wh as default unit', () => {
    expect(shallow(<ElectricityUnit />).find('.unit').text()).toBe('Wh');
  });

  it('should display zero amount if input amount is invalid or negative value', () => {
    expect(shallow(<ElectricityUnit />).find('.amount').text()).toBe('0');
    expect(shallow(<ElectricityUnit amount={0} />).find('.amount').text()).toBe('0');
    expect(shallow(<ElectricityUnit amount={-9999} />).find('.amount').text()).toBe('0');
    expect(shallow(<ElectricityUnit amount={null} />).find('.amount').text()).toBe('0');
  });

  it('should display unit correctly', () => {
    expect(shallow(<ElectricityUnit amount={1} />).find('.unit').text()).toBe('mWh');
    expect(shallow(<ElectricityUnit amount={444} />).find('.unit').text()).toBe('mWh');
    expect(shallow(<ElectricityUnit amount={999} />).find('.unit').text()).toBe('mWh');

    expect(shallow(<ElectricityUnit amount={1000} />).find('.unit').text()).toBe('Wh');
    expect(shallow(<ElectricityUnit amount={444444} />).find('.unit').text()).toBe('Wh');
    expect(shallow(<ElectricityUnit amount={999999} />).find('.unit').text()).toBe('Wh');

    expect(shallow(<ElectricityUnit amount={1000000} />).find('.unit').text()).toBe('kWh');
    expect(shallow(<ElectricityUnit amount={444444444} />).find('.unit').text()).toBe('kWh');
    expect(shallow(<ElectricityUnit amount={999999999} />).find('.unit').text()).toBe('kWh');

    expect(shallow(<ElectricityUnit amount={1000000000} />).find('.unit').text()).toBe('MWh');
    expect(shallow(<ElectricityUnit amount={444444444444} />).find('.unit').text()).toBe('MWh');
    expect(shallow(<ElectricityUnit amount={999999999999} />).find('.unit').text()).toBe('MWh');
  });

  it('should display amount correctly', () => {
    expect(shallow(<ElectricityUnit amount={1} />).find('.amount').text()).toBe('1');
    expect(shallow(<ElectricityUnit amount={444} />).find('.amount').text()).toBe('444');
    expect(shallow(<ElectricityUnit amount={999} />).find('.amount').text()).toBe('999');

    expect(shallow(<ElectricityUnit amount={1000} />).find('.amount').text()).toBe('1');
    expect(shallow(<ElectricityUnit amount={444444} />).find('.amount').text()).toBe('444');
    expect(shallow(<ElectricityUnit amount={999999} />).find('.amount').text()).toBe('1000');

    expect(shallow(<ElectricityUnit amount={1000000} />).find('.amount').text()).toBe('1');
    expect(shallow(<ElectricityUnit amount={444444444} />).find('.amount').text()).toBe('444');
    expect(shallow(<ElectricityUnit amount={999999999} />).find('.amount').text()).toBe('1000');

    expect(shallow(<ElectricityUnit amount={1000000000} />).find('.amount').text()).toBe('1');
    expect(shallow(<ElectricityUnit amount={444444444444} />).find('.amount').text()).toBe('444');
    expect(shallow(<ElectricityUnit amount={999999999999} />).find('.amount').text()).toBe('1000');
  });

  it('has a floating-point equals precision variable', () => {
    expect(shallow(<ElectricityUnit amount={1000000} precision={1} />).find('.amount').text()).toBe('1.0');
    expect(shallow(<ElectricityUnit amount={444444444} precision={1} />).find('.amount').text()).toBe('444.4');
    expect(shallow(<ElectricityUnit amount={999999999} precision={1} />).find('.amount').text()).toBe('1000.0');

    expect(shallow(<ElectricityUnit amount={1000000} precision={2} />).find('.amount').text()).toBe('1.00');
    expect(shallow(<ElectricityUnit amount={444444444} precision={2} />).find('.amount').text()).toBe('444.44');
    expect(shallow(<ElectricityUnit amount={999999999} precision={2} />).find('.amount').text()).toBe('1000.00');

    expect(shallow(<ElectricityUnit amount={1000000} precision={3} />).find('.amount').text()).toBe('1.000');
    expect(shallow(<ElectricityUnit amount={444444444} precision={3} />).find('.amount').text()).toBe('444.444');
    expect(shallow(<ElectricityUnit amount={999999999} precision={3} />).find('.amount').text()).toBe('1000.000');
  });

  it('supports instant electricity unit', () => {
    expect(shallow(<ElectricityUnit amount={555} isInstant />).find('.unit').text()).toBe('mW');
    expect(shallow(<ElectricityUnit amount={555555} isInstant />).find('.unit').text()).toBe('W');
    expect(shallow(<ElectricityUnit amount={555555555} isInstant />).find('.unit').text()).toBe('kW');
    expect(shallow(<ElectricityUnit amount={555555555555} isInstant />).find('.unit').text()).toBe('MW');
  });

  describe('filterFloatingPoint', () => {
    it('sholud return a floating-point number by precision variable ', () => {
      expect(filterFloatingPoint(100.444, 0)).toBe('100');
      expect(filterFloatingPoint(100.444, 1)).toBe('100.4');
      expect(filterFloatingPoint(100.444, 2)).toBe('100.44');
      expect(filterFloatingPoint(100.444, 3)).toBe('100.444');
      expect(filterFloatingPoint(100.444, 4)).toBe('100.4440');
    });

    it('should return rounded number', () => {
      expect(filterFloatingPoint(100.555, 0)).toBe('101');
      expect(filterFloatingPoint(100.555, 1)).toBe('100.6');
      expect(filterFloatingPoint(100.555, 2)).toBe('100.56');
      expect(filterFloatingPoint(100.555, 3)).toBe('100.555');
      expect(filterFloatingPoint(100.555, 4)).toBe('100.5550');
    });
  });

});
