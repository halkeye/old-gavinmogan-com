import React from 'react';
import Projects from './projects';

export default class Index extends React.Component {
  static get propTypes () {
    return {
      url: React.PropTypes.object.isRequired
    };
  }
  render () {
    return <Projects url={this.props.url} />;
  }
}
