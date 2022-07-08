let axios = require("axios");

const resultAPI = axios.get(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
);

console.log(resultAPI);

resultAPI
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
