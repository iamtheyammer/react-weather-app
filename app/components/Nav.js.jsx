const React = require('react');
const LocationEntry = require('./LocationEntry.js.jsx');
const Link = require('react-router-dom').Link;

function Nav(props) {
  return (
    <div>
      <p>----NavBar----</p>
      <p>React weather app</p>
      <Link to='/'>Go home</Link>
      <br /><br />
      <LocationEntry />
      <p>----EndNavBar----</p>
    </div>
  )
}

module.exports = Nav;
