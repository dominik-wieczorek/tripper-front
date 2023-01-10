import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from './LoginComponent';

describe('<LoginComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoginComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
