const React = require('react');
const queryString = require('query-string');
const Nav = require('./Nav.js.jsx');
const api = require('../utils/api.js')

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: queryString.parse(props.location.search).city,
      forecast: null
    }
    this.updateForecast = this.updateForecast.bind(this);
  }

  componentDidMount() {
    this.updateForecast();
  }

  componentDidUpdate() {
    this.state.city != queryString.parse(this.props.location.search).city ? this.updateForecast() : null;
  }

  updateForecast() {
    const city = queryString.parse(this.props.location.search).city;
    api.getForecast(city)
      .then(function(results) {
        this.setState({
          city,
          forecast: results.data
        });
      }.bind(this));
  }

  render() {
    if(!this.state.forecast) {
      return(
        <div>
          <Nav />
          <p>Loading forecast...</p>
        </div>
      )
    }

    return(
      <div>
        <Nav onSubmit={this.updateForecast}/>
        <h1>{this.state.forecast.city.name}</h1>
        <ul>
          {this.state.forecast.list.map((day) => (
            <ul key={day.dt}>
              <li>
                Minimum temp: {day.temp.min}
              </li>
              <li>
                Maximium temp: {day.temp.max}
              </li>
              <li>
                Humidity: {day.humidity}
              </li>
              <li>
                Conditions: {day.weather[0].main}; {day.weather[0].description}
              </li>
              <li>
                Wind speed: {day.speed}
              </li>
              <li>
                <img src={'../app/images/weather-icons/' + day.weather[0].icon + '.svg'} alt={day.weather[0].icon}/>
              </li>
            </ul>
          ))}
        </ul>
      </div>

    )
  }
}

module.exports = Forecast;
