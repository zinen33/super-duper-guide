module.exports.config = {
	name: "google",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "search",
  usages: "[search]",
	commandCategory: "...",
	cooldowns: 0
};

module.exports.run = async ({ api, event,args, Users }) => {
const axios = global.nodemodule["axios"]
let query = args.join(" ");
if (!query)
    return api.sendMessage(`Wrong format\nPlease use: ${global.config.PREFIX}${this.config.name} [search]`, event.threadID, event.messageID);
	const res = await axios.get(`https://api.reikomods.repl.co/search/google?search=${query}`);
let juswa = Object.values(res.data);

var l1 = juswa[0].snippet;
var l2 = juswa[1].snippet;
var l3 = juswa[2].snippet;
var l4 = juswa[3].snippet;
var l5 = juswa[4].snippet;
var l6 = juswa[5].snippet;
var l7 = juswa[6].snippet;
var l8 = juswa[7].snippet;
var l9 = juswa[8].snippet;
var l10 = juswa[9].snippet;
console.log(juswa);
return api.sendMessage(`•——[RESULT]——•\nShowing only 5 results to avoid Error\n\n\n(1.) ${l1}\n\n(2.) ${l2}\n\n(3.) ${l3}\n\n(4.) ${l4}\n\n(5.) ${l5}\n\n•——[RESULT]——•`, event.threadID, event.messageID);
}