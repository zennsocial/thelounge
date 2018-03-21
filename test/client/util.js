"use strict";

const {EventEmitter} = require("events");

class MockSocket extends EventEmitter {
	disconnect() {}
}

function mockJQuery() {
	return {
		text() {},
	};
}

module.exports = {
	mockJQuery,
	MockSocket,
};
