/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import ItemBlock from './itemblock.js';

describe('ItemBlock', function () {
  it('Renders', () => {
    const app = shallow(<ItemBlock />);
    expect(app.exists()).toBeTruthy();
  });
  describe('all props', function () {
    beforeEach(() => {
      this.wrapper = shallow(
        <ItemBlock
          name="saltystories"
          link="http://books.saltystories.ca/"
          img="/static/img/projects/saltystories.png"
          title="Salty Stories - Web"
        />
      );
    });
    it('Has a link to external site', () => {
      expect(
        this.wrapper.find('a[href="http://books.saltystories.ca/"]')
      ).toHaveLength(2);
    });
  });
});
