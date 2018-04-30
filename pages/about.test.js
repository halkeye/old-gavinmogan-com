/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import About from './about.js';

describe('About', () => {
  it('Renders', () => {
    const app = shallow(
      <About
        router={{
          pathname: '/'
        }}
      />
    ).dive();
    expect(app.exists()).toBeTruthy();
  });
});
