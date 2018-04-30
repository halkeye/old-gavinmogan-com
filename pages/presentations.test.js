/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Presentations from './presentations.js';

describe('Presentations', () => {
  it('Renders', () => {
    const app = shallow(
      <Presentations
        router={{
          pathname: '/'
        }}
      />
    ).dive();
    expect(app.exists()).toBeTruthy();
  });
});
