
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss')

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

let ourCoordinates = fetchCoordsByIP("45.72.204.148", (error, data) => {
  console.log("Error = ", error)
  console.log("Data = ", data)
})


// WHAT SHOULD CALL BACK BE? WHAT IT DO?


// at some poitn we sould feed an ip and our funtio  gives us long and lat
fetchISSFlyOverTimes(ourCoordinates, (error, data) => {
  console.log("Error = ", error)
  console.log("Data = ", data)
})
