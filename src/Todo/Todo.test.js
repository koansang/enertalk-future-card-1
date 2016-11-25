import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

describe('<Todo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todo />);
  });

  test('component is working', () => {
    expect(wrapper.type()).toBe('div');
  });

  test('initial state', () => {
    expect(wrapper.state()).toEqual({
      todos: [],
      todo: '',
    });
  });

  test('trigger onChange event', () => {
    const input = wrapper.find('input');

    expect(input.length).toBe(1);

    input.simulate('change', {
      target: {
        value: 'My todo',
      },
    });
    expect(wrapper.state('todo')).toBe('My todo');
  });

  test('add todo', () => {
    const button = wrapper.find('button');

    expect(button.length).toBe(1);

    wrapper.setState({
      todo: 'New Todo',
    });

    button.simulate('click');

    expect(wrapper.state('todos')).toEqual([
      'New Todo',
    ]);

    expect(wrapper.state('todo')).toEqual('');
  });

  test('empty add todo', () => {
    const button = wrapper.find('button');

    expect(button.length).toBe(1);

    wrapper.setState({
      todo: '',
    });

    button.simulate('click');

    expect(wrapper.state('todos')).toEqual([]);

    expect(wrapper.state('todo')).toEqual('');
  });

  test('check key', () => {
    const textInput = wrapper.find('input');

    wrapper.setState({
      todo: 'New Todo',
    });

    textInput.simulate('keyUp', {
        key: 'Enter'
    });

    expect(wrapper.state('todos')).toEqual([
      'New Todo',
    ]);

    expect(wrapper.state('todo')).toEqual('');
  });

  test('remove todo', () => {
    
  });
});
