const request = require('request')

const fetchMyIP = function (callback) {
  const url = 'https://api.ipify.org?format=json'
  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
      return
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip)
  });
}
//module.exports = { fetchMyIP };

const fetchCoordsByIP = function (ip, callback) {
  let url = "https://api.ipbase.com/v2/info?apikey=SdlZVFBO9Rw9NpiyaAvRMPVFewooAz656tYcwx0W&ip=1.1.1.1"
  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
      return
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const latitude = JSON.parse(body).data.location.latitude;
    const longitude = JSON.parse(body).data.location.longitude
    callback(null, { latitude, longitude })
  });
}

module.exports = { fetchCoordsByIP, fetchMyIP };

