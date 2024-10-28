module.exports.config = {
	name: "eid1",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("April 21, 2023 10:00:00") - Date.parse(new Date());
    const saconds = Math.floor( (u/1000) % 60 );
    const menutes = Math.floor( (u/1000/60) % 60 );
    const huurs = Math.floor( (u/(1000*60*60)) % 24 );
    const deys = Math.floor( u/(1000*60*60*24) );

    return api.sendMessage(`Time remaining until ❤ 𝙀𝙞𝙙-𝙐𝙡-𝙁𝙞𝙩𝙧 🥰\n» ${deys} days ${huurs} hours ${menutes} minutes ${saconds} seconds«\n💗𝚁𝚊𝚖𝚊𝚍𝚊𝚗 𝚊𝚗𝚍 𝙴𝚒𝚍 𝚏𝚎𝚜𝚝𝚒𝚟𝚊𝚕𝚜 𝚊𝚛𝚎 𝚍𝚎𝚏𝚒𝚗𝚒𝚝𝚎𝚕𝚢 𝚍𝚎𝚙𝚎𝚗𝚍𝚎𝚗𝚝 𝚘𝚗 𝚖𝚘𝚘𝚗 𝚜𝚒𝚐𝚑𝚝𝚒𝚗𝚐\n*•.¸♡ Happy an amazing Eid, filled with joy and prosperity. Wishing you a pleasant and happy Eid. May Allah fulfil all your dreams on this special day!. With divine joy in my heart and a big smile on my face, I am sending you Advance Eid-ul-Fitr wishes. ♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽𝙍𝙖𝙩𝙪𝙡 𝙃𝙖𝙨𝙨𝙖𝙣≼≽`, event.threadID, event.messageID);
  }