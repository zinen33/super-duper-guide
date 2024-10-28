module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "MrTomXxX",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "got kicked out by the admin";
    if (type == "self-separation") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`[🔱] 𝘼𝙉𝙏𝙄𝙊𝙐𝙏 [🔱] ${name}𝚈𝚎 𝙱𝚊𝚗𝚍𝚎 𝙺𝚘 𝙰𝚍𝚍 𝙽𝚑𝚒 𝙺𝚊𝚛 𝙿𝚊𝚢𝚊 𝙸𝚖 𝚜𝚘𝚛𝚛𝚢 :( `, event.threadID)
            } else api.sendMessage(`[🔱] 𝘼𝙉𝙏𝙄𝙊𝙐𝙏 [🔱] 𝙺𝚊𝚑𝚊 𝙹𝚊 𝚁𝚑𝚎 𝙷𝚘 ${name} 𝙸𝚍𝚑𝚊𝚛 𝚂𝚎 𝙹𝚊𝚗𝚎 𝙺 𝙻𝚒𝚢𝚎 𝙼𝚎𝚛𝚊 𝙿𝚎𝚛𝚖𝚒𝚜𝚜𝚒𝚘𝚗 𝙲𝚑𝚊𝚒𝚢𝚎 〠`, event.threadID);
        })
    }
}