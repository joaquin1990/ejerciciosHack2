const axios = require("axios");

const getData = () => {
  axios.get("https://gist.githubusercontent.com/SuecoMarcus/440d8206cbf0e3e9491d0c431c0e19b6/raw/ea9e085015ae662949ec502389aee17b554a3868/posts.json").then((resp) => {
    return resp.data;
  });
};
console.log(getData());

module.exports = getData;
