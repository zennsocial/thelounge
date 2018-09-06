"use strict";

const fs = require("fs");
const path = require("path");
const Helper = require("./helper");
const log = require("./log");
const Utils = require("./command-line/utils");

const outdated = () => {
	// Get paths to the location of packages directory
	const packagesPath = Helper.getPackagesPath();
	const packagesConfig = path.join(packagesPath, "package.json");
	const argsList = [
		"outdated",
		"--latest",
		"--json",
		"--production",
		"--ignore-scripts",
		"--non-interactive",
		"--cwd",
		packagesPath,
	];

	// Check if the configuration file exists
	if (!fs.existsSync(packagesConfig)) {
		log.warn("There are no packages installed.");
		return;
	}

	return Utils.executeYarnCommand(...argsList);
};

module.exports = {
	outdated,
};
