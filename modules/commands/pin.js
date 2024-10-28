const fs = require('fs-extra');
const path = require('path');

const pathFile = __dirname + '/cache/Pin.js';

fs.ensureFileSync(pathFile);

module.exports.config = {
  name: "pin",
  version: "30.0.0",
  hasPermission: 0,
  credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
  description: "Pin message in a thread",
  commandCategory: "Pin info",
  usages: "pin [on/off]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  if (args[0] === 'on') {
    api.sendMessage("This command has been disabled by the creator.", event.threadID);
  } else if (args[0] === 'off') {
    const threadID = event.threadID;
    const messageID = event.messageID;

    fs.readFile(pathFile, 'utf-8', (err, fileContent) => {
      if (err) {
        return console.error(err);
      }

      let obj;
      try {
        obj = JSON.parse(fileContent);
      } catch (e) {
        console.error(e);
        return api.sendMessage("Error while reading pin file.", threadID);
      }

      const pinnedMessage = obj.pinnedMsgs.find(
        (o) => Object.entries(o).some(([k, message]) => k === "thread" && message === threadID)
      );

      if (!pinnedMessage) {
        api.sendMessage("This thread doesn't have pinned messages yet!", threadID);
      } else {
        api.sendMessage(`===================\nPINNED MESSAGE\n===================\n\n${pinnedMessage.message}`, threadID);
      }
    });
  }
};
