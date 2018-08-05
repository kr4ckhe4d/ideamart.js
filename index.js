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
const SMSReceiver = require('./lib/SMSReceiver');
const RestClient = require('./lib/RestClient');

const SERVER_URL = 'http://localhost:7000/sms/send';
const APP_ID = 'APP_000001';
const APP_PASSWORD = 'password';

// App config
const app = express();
app.use(bodyParser.json());

// Index route
app.post('/', (req, res) => {
  const receiver = new SMSReceiver.SMS(req.body);
  console.log(receiver.getAddress());
  res.status(200).send(req.body);
});

app.post('/send', (req, res) => {
  const newRequest = new RestClient.SendRequest(req.body, SERVER_URL);
  newRequest.send();
  res.status(200).send(req.body);
});

function startServer() {
  const server = app.listen(8899, () => {
    const { port } = server.address();
    console.log(`Listening on port ${port}`);
  });
}

startServer();
