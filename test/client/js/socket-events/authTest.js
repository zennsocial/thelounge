"use strict";

const {expect} = require("chai");
const {stub} = require("sinon");
const authSocket = require("../../../../client/js/socket-events/auth.js");
const location = require("../../../../client/js/location");
const {mockJQuery, MockSocket} = require("../../util");

const mockSocket = new MockSocket();

describe("Auth", function() {
	beforeEach(function() {
		stub(location, "forceReload");

		authSocket(mockJQuery, mockSocket);
	});

	afterEach(function() {
		location.forceReload.restore();
	});

	it("should force a client reload when the server has been restarted", function() {
		mockSocket.emit("auth", {serverHash: 666});
		expect(location.forceReload.calledOnce).to.be.true;
	});
});
