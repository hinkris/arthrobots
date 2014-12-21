/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var State = Router.State;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button;

var LandingPage = require('./ui/LandingPage');
var LoginPage = require('./ui/LoginPage');
var LogoutPage = require('./ui/LogoutPage');
var SignUpPage = require('./ui/SignUpPage');
var BrowseWorldsPage = require('./ui/BrowseWorldsPage');
var WorldPage = require('./ui/WorldPage');
var TrackPage = require('./ui/TrackPage');
var ArthrobotApp = require('./ui/ArthrobotApp');
var LoginAnonymouslyPage = require('./ui/LoginAnonymouslyPage');
var ProfilePage = require('./ui/ProfilePage');

var Empty = React.createClass({

  mixins: [State],

  render: function() {
    return <RouteHandler/>;
  }
});

var routes = (
  <Route name="app" path="/" handler={ArthrobotApp}>
    <Route name="worlds" path="/worlds" handler={Empty}>
      <Route name="world" path="/worlds/:worldId" handler={WorldPage} />
      <DefaultRoute name="browseworlds" handler={BrowseWorldsPage} />
    </Route>
    <Route name="profile" path="/profile/:username" handler={ProfilePage} />
    <Route name="track" path="/tracks/:trackId" handler={TrackPage} />
    <Route name="login" handler={LoginPage} />
    <Route name="login-anonymously" handler={LoginAnonymouslyPage} />
    <Route name="logout" handler={LogoutPage} />
    <Route name="signup" handler={SignUpPage} />
    <DefaultRoute name="landing" handler={LandingPage}/>
  </Route>
);


Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
