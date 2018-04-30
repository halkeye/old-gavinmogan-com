import React from 'react';
import PropTypes from 'prop-types';
import Projects from './projects';
import { withRouter } from 'next/router';

class Index extends React.Component {
  static get propTypes () {
    return {
      router: PropTypes.object.isRequired
    };
  }
  render () {
    return <Projects />;
  }
}

export default withRouter(Index);
