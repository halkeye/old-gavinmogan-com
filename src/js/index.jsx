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
      var ga = null;
      if(typeof GA_TRACKING_CODE !== 'undefined') {
          ga = "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga');";
          ga = ga + "ga('create', '" + GA_TRACKING_CODE + "', 'auto');";
          ga = ga + "ga('send', 'pageview');";
          ga = ga + "</script>";
          ga = <span dangerouslySetInnerHTML={{__html: ga}} />;
     }
      return (
          <div>
              <Nav />
              <RouteHandler/>
              {ga}
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
module.exports.routes = function() {
    var paths = [ routes.props.path ];
    routes.props.children.forEach(function(route) {
        paths.push(routes.props.path + route.props.name);
    });
    return paths;
};
