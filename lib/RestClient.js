/*
  * File: RestClient.js
  * Ideamart : Sample Node.js SMS API
  * File Created: Sunday, 5th August 2018 11:34:34 am
  * Author: Nipuna H Herath (nipunaherath@hotmail.com)
  * -----
  * Licence: ISC License
  * http://opensource.org/licenses/ISC
 */

const axios = require('axios');

function SendRequest(requestParams, url) {
  this.options = {
    requestParams,
    url,
  };
}

SendRequest.prototype.send = function send(callback) {
  const { url, requestParams } = this.options;

  axios({
    method: 'post',
    timeout: 60000,
    url: `${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: requestParams,
  }).then(callback);
};


exports.SendRequest = SendRequest;
