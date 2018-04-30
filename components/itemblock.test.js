/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import ItemBlock from './itemblock.js';

describe('ItemBlock', () => {
  it('Renders', () => {
    const app = shallow(<ItemBlock />);
    expect(app.exists()).toBeTruthy();
  });
});
