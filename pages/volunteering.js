'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header.js';
import ItemBlock from '../components/itemblock.js';
import { withRouter } from 'next/router';

export class Volunteering extends React.Component {
  static get propTypes () {
    return {
      router: PropTypes.object.isRequired
    };
  }
  render () {
    return (
      <div>
        <Header title='Volunteering And Hangouts' description='Where does Gavin hangout?' pathname={this.props.router.pathname} />
        <div className="container">
          <h1>Volunteering and Hangouts</h1>

          <ItemBlock key="nodeschool-yvr"
            img="/static/img/volunteering/nodeschool-yvr.png"
            link="https://community.vancouvertech.com/groups/nodeschool"
            title="NodeSchool Vancouver"
          >
            <p>
              Help out where I can. Usually finding a group that wants to do a certain excersize at our events and help mentor them.
            </p>
            <p>
              <a href="https://community.vancouvertech.com/groups/nodeschool">forum</a>{' | '}
              <a href="https://github.com/nodeschool/vancouver">github</a>{' | '}
              <a href="https://meetup.com/nodeschool-vancouver">meetup</a>{' | '}
              <a href="https://twitter.com/nodeschoolyvr">twitter</a>
            </p>
          </ItemBlock>

          <ItemBlock key="yvr-dev"
            link="https://yvrdev.herokuapp.com"
            title="Vancouver Developers Slack"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Volunteering);
