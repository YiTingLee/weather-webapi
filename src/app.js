const path = require('path');
const express = require('express');
const geocode = require('../geocode/geocode');
const weather = require('../weather/weather');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/api/weather', (req, res) => {
  if (!req.query.apiKey || !req.query.apiKey2 || !req.query.address) {
    res.send({
      error: 'You must provide some arguments.'
    })
  }

  const argv = { apiKey: req.query.apiKey, apiKey2: req.query.apiKey2, address: req.query.address };

  geocode.geocodeAddress(argv, (errMsgs, results) => {
    if (errMsgs) {
      console.log(errMsgs);
    } else {
      const weatherReq = {
        apiKey2: argv.apiKey2,
        lat: results.lat,
        lng: results.lng
      };
      weather.getWeather(weatherReq, (errMsgs, results) => {
        if (errMsgs) {
          console.log(errMsgs);
        } else {
          res.send({
            location: req.query.address,
            temperature: results.temperature,
            apparentTemperature: results.apparentTemperature
          })
        }
      })
    }
  });

})

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
