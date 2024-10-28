module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "MrTomXxX",//Mod by H.Thanh
	description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Dhaka").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "Khud Chala Gaya" : "Admin Lath Mar Diya";
	const path = join(__dirname, "cache", "leaveGif");
	const pathGif = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "[⚜️] 𝙔𝙚 {name} 𝘽𝙖𝙣𝙙𝙖 𝙃𝙪𝙢𝙚 𝘾𝙝𝙤𝙧𝙠𝙚 𝘾𝙝𝙖𝙡𝙖 𝙂𝙖𝙮𝙖. {type}  [⚜️]\n●▬▬▬▬๑۩۩๑▬▬▬▬●\n🌺🌸🌺 𝘼𝙘𝙘𝙝𝙖 𝙃𝙪𝙖 𝘾𝙝𝙖𝙡𝙖 𝙂𝙖𝙮𝙖 𝙉𝙝𝙞 𝙏𝙤𝙝 𝙈 𝙄𝙨𝙨𝙚 𝙄𝙩𝙣𝙖 𝙋𝙖𝙧𝙚𝙨𝙝𝙖𝙣 𝙆𝙖𝙧𝙩𝙞 𝙆𝙞 𝙆𝙝𝙪𝙙 𝙑𝙖𝙜 𝙅𝙖𝙩𝙖 <3😊💔\n\n[❤️‍🔥] 𝘽𝙮𝙚 𝘽𝙮𝙚 𝘽𝙗𝙮 𝘿𝙪𝙖 𝙊 𝙈 𝙈𝙪𝙟𝙝𝙚 𝙔𝙖𝙖𝙙 𝙍𝙖𝙠𝙝𝙣𝙖. 𝙃𝙖𝙫𝙚 𝙖 𝙃𝙖𝙥𝙥𝙮. {session} || {time}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝘼𝙛𝙩𝙚𝙧𝙉𝙤𝙤𝙣" :
    hours > 12 && hours <= 18 ? "𝙀𝙫𝙚𝙣𝙞𝙣𝙜" : "𝙉𝙞𝙜𝙝𝙩").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}