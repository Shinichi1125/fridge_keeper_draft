import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  const login = shallow(<Login />);

  it('renders properly', () => {
    expect(login).toMatchSnapshot();
  });
});