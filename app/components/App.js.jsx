var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home.js.jsx')
const Forecast = require('./Forecast.js.jsx');


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch> // shows ONLY ONE of the listed routes
            <Route exact path='/' component={Home} />
            <Route exact path='/react-weather-app' component={Home}/>
            <Route path='/forecast' component={Forecast} />
            // 404
            <Route render={() => {
              return <p>Not Found</p>
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
