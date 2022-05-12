
const { fetchCoordsByIP, fetchMyIP } = require('./iss')

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

fetchCoordsByIP("45.72.204.148", (error, data) => {
  console.log("Error = ", error)
  console.log("Data = ", data)
})

