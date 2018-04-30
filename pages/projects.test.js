/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Projects from './projects.js';

describe('Projects', () => {
  it('Renders', () => {
    const app = shallow(
      <Projects
        router={{
          pathname: '/'
        }}
      />
    ).dive();
    expect(app.exists()).toBeTruthy();
  });
});
