module.exports.config = {
	name: "ninja",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "Random ninja name",
	commandCategory: "...",
	cooldowns: 3,
};

module.exports.run = async ({ api, event, args, Users }) => {
    const axios = require("axios");
    const res1 = await api.getUserInfoV2(event.senderID);
    const res = await axios.get(`https://api.rest-api-1.repl.co/sus/ninja?name=${res1.first_name}`);
		return api.changeNickname(`${res.data.name}`, event.threadID, event.senderID);
  }