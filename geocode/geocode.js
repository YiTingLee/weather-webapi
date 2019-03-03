const request = require('request');

const geocodeAddress = (info, callback) => {
  const encodedAddress = encodeURIComponent(info.address);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${info.apiKey}&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('enable to fetch the latlng');
    } else if (body.info.statuscode === 0) {
      callback(undefined, {
        results: body.results,
        lat: body.results[0].locations[0].latLng.lat,
        lng: body.results[0].locations[0].latLng.lng
      });
    }
  });
}

module.exports.geocodeAddress = geocodeAddress;
