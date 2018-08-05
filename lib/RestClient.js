const axios = require('axios');

function SendRequest(requestParams, url) {
  this.options = {
    requestParams,
    url,
  };
}

SendRequest.prototype.send = function send() {
  const { url, requestParams } = this.options;

  axios({
    method: 'post',
    timeout: 60000,
    url: `${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: requestParams,
  }).then((response) => {
    console.log('xxx response.data');
    console.log(JSON.stringify(response.data));
  });
};


exports.SendRequest = SendRequest;
