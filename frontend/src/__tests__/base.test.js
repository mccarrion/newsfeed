/**
 * This is the core file for testing until it grows large enough
 * to split logically into multiple files
 */
import React from 'react';
import { mount } from 'enzyme';
import { SignUp } from '../components/user/SignUp';
import enzymeConfig from '../enzymeConfig';

// This is the base test to make sure the lights are on
it('Should sum to 2', () => {
  expect(1+1).toEqual(2);
});

/**
 * Unit tests for the SignUp form
 */
describe('<SignUp>', function() {
  
  // Test username fill out
  it('Should set username correctly', function() {
    const component = mount(<SignUp />);
    const input = component.find('input').at(0);
    input.instance().value = 'John Smith';
    input.simulate('change');
    expect(component.state().username).toEqual('John Smith');
  });
});
