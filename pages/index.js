import React from 'react';
import PropTypes from 'prop-types';
import Projects from './projects';

export default class Index extends React.Component {
  static get propTypes () {
    return {
      url: PropTypes.object.isRequired
    };
  }
  render () {
    return <Projects url={this.props.url} />;
  }
}
