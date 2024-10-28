module.exports.config = {
 name: "asci",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
 description: "Create Text",
 commandCategory: "Tools",
 dependencies: {"figlet": ""},
 usages: "ascii <text>",
 cooldowns: 5
};

module.exports.run = ({ api, event, args }) => {
 const figlet = global.nodemodule["figlet"];
 let p = args.join(" ");
 figlet(p, function(err, data) {
    if (err) {
        api.sendMessage('Something went wrong...', event.threadID, event.messageID);
        console.dir(err);
        return;
    }
    api.sendMessage(data, event.threadID, event.messageID);
});
  }