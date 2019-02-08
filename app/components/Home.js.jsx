const React = require('react');
const LocationEntry = require('./LocationEntry.js.jsx');
const Nav = require('./Nav.js.jsx');

function Home() {
  return (
    <div>
      <Nav />
      <h1>Welcome home!</h1>
      <h3>Enter a location to get the weather for.</h3>
      <LocationEntry />
    </div>
  )
}

module.exports = Home;
