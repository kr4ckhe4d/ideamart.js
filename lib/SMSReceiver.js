/*
  * File: SMSReceiver.js
  * Ideamart : Sample Node.js SMS API
  * File Created: Sunday, 5th August 2018 11:34:34 am
  * Author: Nipuna H Herath (nipunaherath@hotmail.com)
  * -----
  * Licence: MIT License
  * http://opensource.org/licenses/MIT
 */

function SMS(options) {
  this.options = options;
  const requestParams = options;
  const response = {};

  if (requestParams.sourceAddress === undefined || requestParams.message === undefined) {
    response.statusCode = 'E1312';
    response.statusDetail = 'SMS Receiver: Request is Invalid.';
  } else {
    // response.version = requestParams.version;
    // response.applicationId = requestParams.applicationId;
    // response.sourceAddress = requestParams.sourceAddress;
    // response.message = requestParams.message;
    // response.requestId = requestParams.requestId;
    // response.encoding = requestParams.encoding;
    response.statusCode = 'S1000';
    response.statusDetail = 'SMS Receiver: Process completed successfully.';
  }
  console.log(`${JSON.stringify(response)}`);
}

SMS.prototype.getVersion = function getVersion() { return this.options.version; };
SMS.prototype.getEncoding = function getEncoding() { return this.options.encoding; };
SMS.prototype.getApplicationId = function getApplicationId() { return this.options.applicationId; };
SMS.prototype.getAddress = function getAddress() { return this.options.sourceAddress; };
SMS.prototype.getMessage = function getMessage() { return this.options.message; };
SMS.prototype.getRequestId = function getRequestId() { return this.options.requestId; };

exports.SMS = SMS;
