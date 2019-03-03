const request = require('request');

const getWeather = (info, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${info.apiKey2}/${info.lat},${info.lng}`,
    json: true
  }, (err, response, body) => {
    if (err) {
      callback(`Unable to connect to Server`);
    } else if (response.statusCode === 400) {
      callback(`Unable to fetch weather.`);
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }
  })
}

module.exports.getWeather = getWeather;
