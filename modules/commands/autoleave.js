const fs = require("fs-extra");
const config = require("../../config.json");
module.exports.config = {
    name: "autoout",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "\u0042\u006f\u0074\u0020\u0077\u0069\u006c\u006c\u0020\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0061\u006c\u006c\u0079\u0020\u006c\u0065\u0061\u0076\u0065\u0020\u0069\u0066\u0020\u0074\u0068\u0065\u0020\u0067\u0063\u0020\u0068\u0061\u0073\u0020\u0061\u0020\u006d\u0065\u006d\u0062\u0065\u0072\u0020\u0031\u002d\u0034\u0020\u006f\u006e\u006c\u0079",
    commandCategory: "Admin",
    usages: "[number of member]",
    cooldowns: 0
};

module.exports.onLoad = () => {
    if(!config["leave"]) config["leave"] = {};
    if(!config["leave"]["status"]) config["leave"]["status"] = false;
    if(!config["leave"]["number"]) config["leave"]["number"] = 0;
    fs.writeFileSync("./config.json", JSON.stringify(config, null, 4));
}

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;
    if(args[0]) number = parseInt(args[0]);
    config.leave = { status: config.leave.status == true ? false : true, number: number || config.leave.number}
    fs.writeFileSync("./config.json", JSON.stringify(config, null, 4));
    return api.sendMessage(`Satisfied ${config["leave"]["status"] == true ? "turn on" : "turn off"} function to automatically leave the group when the group has a smaller number of members ${config["leave"]["number"]} member.`, threadID, messageID);
}

module.exports.handleEvent = async ({ api, event }) => {
    const { threadID, messageID, participantIDs } = event;
    if (config["leave"]["status"] && participantIDs.length <= config["leave"]["number"] && event.isGroup && event.senderID != api.getCurrentUserID() && !config.ADMINBOT.includes(event.senderID)) {
       await api.sendMessage(`\u0042\u006f\u0074\u0020\u0077\u0069\u006c\u006c\u0020\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0061\u006c\u006c\u0079\u0020\u006c\u0065\u0061\u0076\u0065\u0020\u0069\u0066\u0020\u0074\u0068\u0065\u0020\u0067\u0063\u0020\u0068\u0061\u0073\u0020\u0061\u0020\u006d\u0065\u006d\u0062\u0065\u0072\u0020\u0031\u002d\u0034\u0020\u006f\u006e\u006c\u0079`, threadID);
        return api.removeUserFromGroup(api.getCurrentUserID(), threadID);
    }
}                       