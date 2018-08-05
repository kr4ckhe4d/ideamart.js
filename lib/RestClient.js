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
