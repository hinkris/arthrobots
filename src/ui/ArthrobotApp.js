/** @jsx React.DOM */

var ActiveState = require('react-router').ActiveState;
var Link = require('react-router').Link;
var Parse = require('parse').Parse;
var React = require('react');
var gravatar = require('gravatar');

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var Tab = require('./Tab');

require('./ArthrobotApp.css')

var ArthrobotApp = React.createClass({

  mixins: [ActiveState],

  render: function() {
    var navbar = [];
    var user = Parse.User.current();
    if (user) {
      navbar = [
        <Link to="profile" params={{username:user.get('username')}}><img className="gravatar" src={gravatar.url(user.get('email'))} /></Link>,
        <Tab to="logout">Logout</Tab>
      ];
    } else {
      navbar = [
        <Tab to="signup"><strong>Sign Up</strong></Tab>,
        <Tab to="login">Log In</Tab>
      ];
    }

    return (
      <div className="container ArthrobotApp">
        <Navbar brand="Arthrobots" fluid={true} className="navbar-inverse">
          <Nav>
            <Tab to="landing">Home</Tab>
            {user ? <Tab to="worlds">Worlds</Tab> : null}
          </Nav>
          <Nav className="navbar-right">
            {navbar}
          </Nav>
        </Navbar>

        <div className="row">
          <div className="col-md-12 app-content">
            <this.props.activeRouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ArthrobotApp;