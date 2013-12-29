// Generated by CoffeeScript 1.6.3
(function() {
  var SIOError, errorClasses, errorName, util, _fn, _i, _len;

  util = require('util');

  errorClasses = ['ConfigurationError'];

  SIOError = function(msg, constr) {
    Error.captureStackTrace(this, constr || this);
    return this.message = msg || 'Error';
  };

  util.inherits(SIOError, Error);

  SIOError.prototype.name = 'SIOError';

  _fn = function(errorName) {
    var errorFn;
    errorFn = exports[errorName] = function(msg) {
      return errorFn.super_.call(this, msg, this.constructor);
    };
    util.inherits(errorFn, SIOError);
    return errorFn.prototype.name = errorName;
  };
  for (_i = 0, _len = errorClasses.length; _i < _len; _i++) {
    errorName = errorClasses[_i];
    _fn(errorName);
  }

}).call(this);
