/*
  * File: SMSReceiver.js
  * Ideamart : Sample Node.js SMS API
  * File Created: Sunday, 5th August 2018 11:34:34 am
  * Author: Nipuna H Herath (nipunaherath@hotmail.net)
  * -----
  * Licence: MIT License
  * http://opensource.org/licenses/MIT
 */

function SMS (options) {
  
  this.options = options;
  var requestParams = options;
  var response={};
  
  if(requestParams.sourceAddress == undefined || requestParams.message == undefined){
      response.statusCode ='E1312'
      response.statusDetail='Request is Invalid.';
  }    
	else{
			// response.version = requestParams.version;
			// response.applicationId = requestParams.applicationId;
			// response.sourceAddress = requestParams.sourceAddress;
			// response.message = requestParams.message;
			// response.requestId = requestParams.requestId;
			// response.encoding = requestParams.encoding;
      response.statusCode ='S1000'
      response.statusDetail='Process completed successfully.';
  }
  console.log(response);
}

SMS.prototype.getVersion = function(){
  return this.options.version;
}

SMS.prototype.getEncoding = function(){
  return this.options.encoding;
}

SMS.prototype.getApplicationId = function(){
  return this.options.applicationId;
}

SMS.prototype.getAddress = function(){
  return this.options.sourceAddress;
}

SMS.prototype.getMessage = function(){
  return this.options.message;
}

SMS.prototype.getRequestId = function(){
  return this.options.requestId;
}

exports.SMS = SMS;