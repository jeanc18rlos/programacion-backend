/* istanbul ignore file */

import * as dotenv from 'dotenv';

import App from './src/app';

// Load DOTENV
dotenv.config({ debug: true });

// Vars
const { PORT, HOST } = process.env;

(async () => {
  try {
    const server = new App(PORT, HOST)
    await server.listen()
    await server.start()
  } catch (error) {
    console.log(`error ${error}`)
  }
})()
