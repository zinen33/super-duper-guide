const fs = require("fs");
module.exports.config = {
	name: "runningbot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓", 
	description: "get upt",
	commandCategory: "no prefix",
	usages: "...",
    cooldowns: 0, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	if (event.body.indexOf("upt")==0) {
			api.sendMessage(`Master, bot is up and running   ${hours}:${minutes}:${seconds}`, threadID);
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }