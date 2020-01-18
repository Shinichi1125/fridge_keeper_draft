import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import "../setupTests"

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the `state` of the loggedin', () => {
  expect(app.state().loggedin).toEqual(false);
});
