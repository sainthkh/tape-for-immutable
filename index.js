const test = require('tape')

test.Test.prototype.immutableEqual = function(a, b, msg, extra) {
	this._assert(a.equals(b), {
		message : msg ? msg : 'should be equal',
		operator : 'equal',
		actual : a,
		expected : b,
		extra : extra
	})
}

test.Test.prototype.immutableNotEqual = function (a, b, msg, extra) {
	this._assert(!a.equals(b), {
		message : msg ? msg : 'should not be equal',
		operator : 'notEqual',
		actual : a,
		expected : b,
		extra : extra
	})
}