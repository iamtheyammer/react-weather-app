const React = require('react');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;

class LocationEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/forecast?city=' + window.encodeURI(this.state.text));
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder={this.props.inputPlaceholder}
          onChange={this.handleChange}>
          </input>
        <Link to={{
          pathname: '/forecast',
          search: '?city=' + window.encodeURI(this.state.text)}}>{this.props.buttonText}</Link>
      </div>
    )
  }
}

LocationEntry.propTypes = {
  inputPlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,

}

LocationEntry.defaultProps = {
  inputPlaceholder: 'San Francisco, California',
  buttonText: 'Submit'
}

module.exports = LocationEntry
