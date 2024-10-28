module.exports.config = {
	name: "eid2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrTomXxX",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("June 28, 2023 10:00:00") - Date.parse(new Date());
    const saconds = Math.floor( (u/1000) % 60 );
    const menutes = Math.floor( (u/1000/60) % 60 );
    const huurs = Math.floor( (u/(1000*60*60)) % 24 );
    const deys = Math.floor( u/(1000*60*60*24) );

    return api.sendMessage(`Time remaining until ❤ 𝙀𝙞𝙙-𝙐𝙡-𝘼𝙙𝙝𝙖 🥰\n» ${deys} days ${huurs} hours ${menutes} minutes ${saconds} seconds«\n💗𝙴𝚒𝚍 𝚏𝚎𝚜𝚝𝚒𝚟𝚊𝚕𝚜 𝚊𝚛𝚎 𝚍𝚎𝚏𝚒𝚗𝚒𝚝𝚎𝚕𝚢 𝚍𝚎𝚙𝚎𝚗𝚍𝚎𝚗𝚝 𝚘𝚗 𝚖𝚘𝚘𝚗 𝚜𝚒𝚐𝚑𝚝𝚒𝚗𝚐\n*•.¸♡ On the joyful day of Eid-ul-Adha, may Allah fill your life with happiness, peace and prosperity. May Allah fill your heart with love, your soul with spiritual, your mind with wisdom. Advance Eid Mubarak! "May God give you happiness of heaven above ♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽𝙍𝙖𝙩𝙪𝙡 𝙃𝙖𝙨𝙨𝙖𝙣≼≽`, event.threadID, event.messageID);
  }