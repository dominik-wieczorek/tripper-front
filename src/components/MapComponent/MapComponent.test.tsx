import React from 'react';
import { shallow } from 'enzyme';
import MapComponent from './MapComponent';

describe('<MapComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MapComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
