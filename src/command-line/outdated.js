"use strict";

const program = require("commander");
const Utils = require("./utils");
const packageManager = require("../packageManager");
const log = require("../log");

program
	.command("outdated")
	.description("Check for any outdated packages")
	.on("--help", Utils.extraHelp)
	.action(() => {
		log.info("Checking for outdated packages");

		packageManager.outdated().then(() => {
			log.info("No outdated packages");
		}).catch(() => {
			log.info("There are outdated packages");
		});
	});
