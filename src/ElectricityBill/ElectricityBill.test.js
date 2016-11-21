import React from 'react';
import { shallow } from 'enzyme';
import ElectricityBill, { filterFloatingPoint } from './ElectricityBill';

describe('ElectricityBill', () => {
  it('should render inline element', () => {
    expect(shallow(<ElectricityBill />).every('span')).toBeTruthy();
  });

  it('should render 3 span elements', () => {
    expect(shallow(<ElectricityBill />).find('span').length).toBe(3);
  });

  it('has default amount and unit', () => {
    expect(shallow(<ElectricityBill />).find('.amount').text()).toBe('0');
    expect(shallow(<ElectricityBill />).find('.unit').text()).toBe('$ ');
  });

  it('should display comma seperated amount', () => {
    expect(shallow(<ElectricityBill amount={555} />).find('.amount').text()).toBe('555');
    expect(shallow(<ElectricityBill amount={10000} />).find('.amount').text()).toBe('10,000');
    expect(shallow(<ElectricityBill amount={552233333} />).find('.amount').text()).toBe('552,233,333');
  });

  it('should support precision option', () => {
    expect(shallow(<ElectricityBill amount={10000.234} precision={1} />).find('.amount').text()).toBe('10,000.2');
    expect(shallow(<ElectricityBill amount={10000.234} precision={2} />).find('.amount').text()).toBe('10,000.23');
  });

  it('should display unit by country and language', () => {
    expect(shallow(<ElectricityBill amount={100} />).text()).toBe('$ 100');

    expect(shallow(<ElectricityBill amount={100} country={'US'} />).text()).toBe('$ 100');
    expect(shallow(<ElectricityBill amount={100} country={'US'} language={'en'} />).text()).toBe('$ 100');
    expect(shallow(<ElectricityBill amount={100} country={'US'} language={'ko'} />).text()).toBe('$ 100');
    expect(shallow(<ElectricityBill amount={100} country={'US'} language={'ja'} />).text()).toBe('$ 100');

    expect(shallow(<ElectricityBill amount={100} country={'KR'} />).text()).toBe('₩ 100');
    expect(shallow(<ElectricityBill amount={100} country={'KR'} language={'en'} />).text()).toBe('₩ 100');
    expect(shallow(<ElectricityBill amount={100} country={'KR'} language={'ko'} />).text()).toBe('100원');
    expect(shallow(<ElectricityBill amount={100} country={'KR'} language={'ja'} />).text()).toBe('₩ 100');

    expect(shallow(<ElectricityBill amount={100} country={'JP'} />).text()).toBe('¥ 100');
    expect(shallow(<ElectricityBill amount={100} country={'JP'} language={'en'} />).text()).toBe('¥ 100');
    expect(shallow(<ElectricityBill amount={100} country={'JP'} language={'ko'} />).text()).toBe('¥ 100');
    expect(shallow(<ElectricityBill amount={100} country={'JP'} language={'ja'} />).text()).toBe('100円');
  });

  it('should return number type', () => {
    expect(filterFloatingPoint()).toBe(0);
    expect(typeof filterFloatingPoint()).toBe('number');
    expect(filterFloatingPoint(1000.234, 1)).toBe(1000.2);
    expect(typeof filterFloatingPoint(1000.234, 1)).toBe('number');
  })
});
