const dotenv = require('dotenv')
dotenv.config();

const { MY_SALT } = process.env;

console.log(MY_SALT);