const axios = require('axios');
const appId = 'APPID=b714ec74bbab5650795063cb0fdf5fbe';
const useParams = false;



module.exports = {
  getForecast: (city) => {
    return axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + window.encodeURI(city) + '&type=accurate&' + appId + '&cnt=5&units=imperial')
      .then((response) => {
        return response;
      });
  }
}
