'use strict';
const React = require('react');
const Router = require('react-router');
const analytics = require('ga-react-router');

const Nav = require('./components/Nav.jsx');
const Main = require('./components/Main.jsx');
const Presentations = require('./components/Presentations.jsx');
const Projects = require('./components/Projects.jsx');
const Volunteering = require('./components/Volunteering.jsx');
const About = require('./components/About.jsx');

const config = require('./config.js');
require('../styles/main.scss');

const {Route, RouteHandler, DefaultRoute, NotFoundRoute} = Router;

const App = React.createClass({
  render () {
    return (
      <div>
        <Nav />
        <div className="container">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Projects} />
    <Route name="projects" handler={Projects} />
    <Route name="presentations" handler={Presentations} />
    <Route name="volunteering" handler={Volunteering} />
    <Route name="about" handler={About} />
  </Route>
);

if (typeof document !== 'undefined') {
    Router.run(routes, Router.HistoryLocation, function(Handler, state) {
      React.render(<Handler/>, document.body);
//      analytics(state);
    });
}

module.exports = function render (locals, callback) {
    Router.run(routes, locals.path, function (Handler) {
        var html = React.renderToString(React.createElement(Handler, locals));
        callback(null, html);
    });
};
