/*
  * File: SMSSender.js
  * Ideamart : Sample Node.js SMS API
  * File Created: Sunday, 5th August 2018 11:34:34 am
  * Author: Nipuna H Herath (nipunaherath@hotmail.com)
  * -----
  * Licence: ISC License
  * http://opensource.org/licenses/ISC
 */
const RestClient = require('./RestClient');

function SMS(serverURL, applicationId, password) {
  // this.options = {
  //   serverURL,
  //   applicationId,
  //   password
  // };
  // const requestParams = options;
  const response = {};

  if (serverURL === undefined || applicationId === undefined || password === undefined) {
    response.statusCode = 'E1312';
    response.statusDetail = 'SMS Sender: Request is Invalid.';
  } else {
    response.statusCode = 'S1000';
    response.statusDetail = 'SMS Sender: Process completed successfully.';
    this.options = {
      serverURL,
      applicationId,
      password,
    };
  }
  console.log(`${JSON.stringify(response)}`);
}

SMS.prototype.sendSMS = function sendSMS(message, addresses) {
  const response = {};
  let jsonStream = {};

  if (addresses == null) {
    response.statusCode = 'E1325';
    response.statusDetail = 'Format of the address is invalid.';
    console.log(`${JSON.stringify(response)}`);
  } else if (typeof addresses === 'string') {
    jsonStream = this.resolveJsonStream(message, [addresses]);
  } else if (Array.isArray(addresses)) {
    jsonStream = this.resolveJsonStream(message, addresses);
  } else {
    jsonStream = null;
  }
  console.log('send: jsonStream: ', JSON.stringify(jsonStream));
  return jsonStream !== null ? this.handleResponse(jsonStream, this.options.serverURL) : false;
};

SMS.prototype.resolveJsonStream = function resolveJsonStream(message, addresses) {
  const jsonStream = {};
  jsonStream.message = message;
  jsonStream.destinationAddresses = addresses;
  jsonStream.applicationId = this.options.applicationId;
  jsonStream.password = this.options.password;
  return jsonStream;
};

SMS.prototype.handleResponse = async function handleResponse(jsonStream, serverURL) {
  const newRequest = new RestClient.SendRequest(jsonStream, serverURL);
  let responseData = false;

  await newRequest.send((response) => {
    console.log('response: ', JSON.stringify(response.data));

    const { statusCode, statusDetail } = response.data;

    if (response.data == null) {
      console.log('Invalid server URL', '500');
    } else if (statusCode === 'S1000') {
      responseData = true;
    } else {
      console.log(statusDetail, statusCode);
    }
  });

  return responseData;
};

// SMS.prototype.getAddress = function getAddress() { return this.options.sourceAddress; };
// SMS.prototype.getMessage = function getMessage() { return this.options.message; };
// SMS.prototype.getRequestId = function getRequestId() { return this.options.requestId; };

exports.SMS = SMS;
