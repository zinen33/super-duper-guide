module.exports.config = {
	name: "thought",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "showerthoughts",
	commandCategory: "information",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/showerthoughts`);
var result = res.data.result;
var author = res.data.author;
return api.sendMessage(`Author: ${author}\n\nThoughts: ${result}`, event.threadID, event.messageID)
}
