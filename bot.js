var fs = require('fs');
var irc = require("irc");
var config = require('./config/config.json');
var observer = require('./modules/observer.js');

/*
 * LumpenBot
 * ===============================================================
 * by astreon
 *
 */

// Instanciate the client and add listener
var client = new irc.Client(config.server, config.userName, config);

// Check when registred to IRC server
client.addListener("registred", function() {
	console.log("Bot is now registered with the server "+config.server);
});

// Error handler
client.addListener('error', function(message) {
	console.log('error: ', message);
});

// Listen for messages
client.addListener('message', function(from, to, text, message) {
	observer(client, from, to, text, message);
});
