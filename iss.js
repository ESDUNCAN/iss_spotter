const request = require('request')

const nextISSTimesForMyLocation = function (callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, nextPasses);
      });
    });
  });
};
module.exports = { nextISSTimesForMyLocation };













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
    if (!error) {
      const latitude = JSON.parse(body).data.location.latitude;
      const longitude = JSON.parse(body).data.location.longitude
      callback(null, { latitude, longitude })
    }
  });
}


const fetchISSFlyOverTimes = function (coords, callback) {
  const url = ' https://iss-pass.herokuapp.com/json/?lat=-33.86714172363281&lon=151.2071075439453'
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
    const data = JSON.parse(body).response;
    callback(null, data)
  });
};

// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };

