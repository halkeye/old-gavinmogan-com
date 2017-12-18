'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header.js';
import ItemBlock from '../components/itemblock.js';

export default class Volunteering extends React.Component {
  static get propTypes () {
    return {
      url: PropTypes.object.isRequired
    };
  }
  render () {
    return (
      <div>
        <Header title='Volunteering And Hangouts' description='Where does Gavin hangout?' url={this.props.url} />
        <div className="container">
          <h1>Volunteering and Hangouts</h1>
          <ItemBlock key="ladies-learning-code"
            img="https://pbs.twimg.com/profile_images/614135444775825409/GHWE979-_reasonably_small.png"
            link="http://ladieslearningcode.com/chapters/vancouver/"
            title="Ladies Learning Code Vancouver"
          />

          <ItemBlock key="yvr-dev"
            link="https://yvrdev.herokuapp.com"
            title="Vancouver Developers Slack"
          />

          <ItemBlock key="cascadiajs"
            link="http://slack.cascadiajs.com/"
            title="CascadiaJS Slack"
          />
        </div>
      </div>
    );
  }
}
