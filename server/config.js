const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  API_ENDPOINT: process.env.API_URL,
  API_KEY: process.env.API_KEY,
  PORT: process.env.PORT
};