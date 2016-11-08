import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('HelloWorld using react-test-utils', () => {
  const renderer = ReactTestUtils.createRenderer();
  let wrapper;

  it('should display default text', () => {
    renderer.render(<HelloWorld />);
    wrapper = renderer.getRenderOutput();

    const text = wrapper.props.children;
    expect(text.type).toEqual('h1');
    expect(text.props.children).toEqual([
      'Hello, ',
      'world',
      '!',
    ]);
  });

  it('should display text with username', () => {
    renderer.render(<HelloWorld name="yongdamsh" />);
    wrapper = renderer.getRenderOutput();

    const text = wrapper.props.children;
    expect(text.type).toEqual('h1');
    expect(text.props.children).toEqual([
      'Hello, ',
      'yongdamsh',
      '!',
    ]);
  });
});

describe('HelloWorld using enzyme', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HelloWorld />);
  });

  it('should display default text', () => {
    expect(wrapper.text()).toBe('Hello, world!');
  });

  it('should display text with username', () => {
    wrapper.setProps({
      name: 'yongdamsh',
    });

    expect(wrapper.text()).toBe('Hello, yongdamsh!');
  });
});
