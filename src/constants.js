const clientSideCommands = [
    "/collapse",
    "/expand"
];

const passThroughCommands = [
	"/as",
	"/bs",
	"/cs",
	"/ho",
	"/hs",
	"/join",
	"/ms",
	"/ns",
	"/os",
	"/rs",
];

const inputs = [
	"ban",
	"ctcp",
	"msg",
	"part",
	"rejoin",
	"action",
	"away",
	"connect",
	"disconnect",
	"ignore",
	"invite",
	"kick",
	"mode",
	"nick",
	"notice",
	"query",
	"quit",
	"raw",
	"topic",
	"list",
	"whois",
].reduce(function(plugins, name) {
	const plugin = require(`./plugins/inputs/${name}`);
    plugin.commands.forEach((command) => plugins[command] = plugin);
    return plugins;
}, {});

const getCommands = () => Object.keys(inputs).map((command) => `/${command}`).concat(clientSideCommands).concat(passThroughCommands);

module.exports = {
    getCommands, inputs
}