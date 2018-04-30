/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Volunteering from './volunteering.js';

describe('Volunteering', () => {
  it('Renders', () => {
    const app = shallow(
      <Volunteering
        router={{
          pathname: '/'
        }}
      />
    ).dive();
    expect(app.exists()).toBeTruthy();
  });
});
