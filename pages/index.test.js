/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Index from './index.js';

describe('Index', () => {
  it('Renders', () => {
    const app = shallow(
      <Index
        router={{
          pathname: '/'
        }}
      />
    );
    expect(app.exists()).toBeTruthy();
  });
});
