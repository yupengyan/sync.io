'use strict';
var dejavu = require('dejavu');

var Helpers = dejavu.Class.declare({
	$name: 'Helpers',
	$statics: {
		/**
		 * Converts a 4 byte IP into the string representation. This will obviously
		 * only work with IPv4, but BTSync does not support IPv6 at the moment anyways,
		 * so that should be fine.
		 * 
		 * @param  {number} numericIp Numeric 4 byte representation of an IP
		 * @return {string} String representation of the given IP
		 */
		ip_ntoa: function(numericIp) {
			return [
				((numericIp >> 24) & 0xFF),
				((numericIp >> 16) & 0xFF),
				((numericIp >>  8) & 0xFF),
				((numericIp >>  0) & 0xFF)
			].join('.');
		},

		/**
		 * Returns the current UNIX timestamp - that's it, just a nice little shortcut,
		 * as I'm too lazy to type that command over and over again.
		 * 
		 * @return {number} Current UNIX timestamp
		 */
		timestamp: function() {
			return (new Date()).getTime();
		},

		/**
		 * Shorts an ID down to 7 characters. This ID might be no longer unique, but
		 * should be used for logging, to avoid ugly long character sequences of
		 * hex-encoded IDs.
		 * 
		 * @param  {string} id The whole ID
		 * @return {string} Shortened ID
		 */
		shortenId: function(id) {
			return id.substring(0, 12);
		}
	}
});

module.exports = Helpers;