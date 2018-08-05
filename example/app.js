
/*
  * File: SMSReceiver.js
  * Ideamart : Sample Node.js SMS API
  * File Created: Sunday, 5th August 2018 11:34:34 am
  * Author: Nipuna H Herath (nipunaherath@hotmail.com)
  * -----
  * Licence: MIT License
  * http://opensource.org/licenses/MIT
 */

const express = require('express');
const bodyParser = require('body-parser');
const IdeMart = require('ideamart-sms-sdk');
const SMSReceiver = IdeMart.SMSReceiver;
const SMSSender = IdeMart.SMSSender;


const SERVER_URL = 'http://localhost:7000/sms/send';
const APP_ID = 'APP_000001';
const APP_PASSWORD = 'password';

// App config
const app = express();
app.use(bodyParser.json());

// Create new sender instance to send a SMS.
const sender = new SMSSender.SMS(SERVER_URL, APP_ID, APP_PASSWORD);

// Index route
app.post('/', (req, res) => {
  res.status(200).send(req.body);
});

// Sample route to test if the request response is working correctly.
app.post('/send', (req, res) => {
  const receiver = new SMSReceiver.SMS(req.body); // Extract the request data from request body.
  const address = receiver.getAddress();
  const message = receiver.getMessage();

  sender.sendSMS(message, address);
  res.status(200).send(req.body);
});

/**
 * This function will create a Node server on port 8899
 */
function startServer() {
  const server = app.listen(8899, () => {
    const { port } = server.address();
    console.log(`Listening on port ${port}`);
  });
}

// Start Node server
startServer();
