function SMS (options) {
  
  this.options = options;
  // var sourceAddress = options.sourceAddress;
  // this.webhook = options.webhook || '/mo-receiver';
  // this.iterator = null;
  // EventEmitter.call(this);

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
  return this.options.address;
}

SMS.prototype.getMessage = function(){
  return this.options.message;
}

SMS.prototype.getRequestId = function(){
  return this.options.requestId;
}

exports.SMS = SMS;