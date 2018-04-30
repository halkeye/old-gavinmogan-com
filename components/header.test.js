/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Header from './header.js';

describe('Header', () => {
  it('Renders', () => {
    const app = shallow(<Header pathname="/" />);
    expect(app.exists()).toBeTruthy();
  });
});
