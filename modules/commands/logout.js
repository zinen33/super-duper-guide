module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "Logout ACC Bot",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
{
api.sendMessage("Logout ...",event.threadID,event.messageID)
api.logout()
}