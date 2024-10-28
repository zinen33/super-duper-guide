'use strict';
/** @type {!Array} */
var _0x9dba = ["https://api--mtxapi.repl.co/api/textpro?number=1&text=", "config", "exports", "logo1", "13.1.9", "\u269e\ud835\udde0\ud835\udde7\ud835\uddeb\u279b\ud835\udde3\ud835\uddff\ud835\uddfc\ud835\uddf7\ud835\uddf2\ud835\uddf0\ud835\ude01\u269f", "Logo-Name Your Name", "MTX-PROJECT", "/logoname MrTomXxX", "run", "credits", "[ WARNING ] \u00bb CHANGEING EVERYTHING IS NOT GOOD UNTIL HAVE A GOOD KNOWLEDGE :p MTX-PROJECT :) ", "BOTNAME", ' credits modules "', "name", '"', "log", "\u00d7 [ WARNING ] \u00d7 HAHA, EVERYTHING IS NOT YOURS PROPERTY \ud83d\ude39\ud83d\udd90\ud83c\udffb", 
"threadID", "messageID", "sendMessage", "axios", "fs-extra", "querystring", " ", "join", "type", "message_reply", "url", "attachments", "messageReply", "", "/cache/banner.png", "\u275d\u272ew\u0489\u00a0a\u0489\u00a0i\u0489\u00a0t\u0489\u00a0 F\u0489\u00a0o\u0489\u00a0r\u0489  \u277aS\u0489\u00a0e\u0489\u00a0c\u0489\u00a0 \u272e\u275e", "response", "data", "parse", "Error! An error occurred. Please try again later ", "error", "message", "catch", "from", "writeFileSync", "\u275d\u272e\u269e\ud835\udde0\ud835\udde7\ud835\uddeb\u279b\ud835\udde3\ud835\uddff\ud835\uddfc\ud835\uddf7\ud835\uddf2\ud835\uddf0\ud835\ude01\u269f                         \ud835\uddec\ud835\uddfc\ud835\ude02\ud835\uddff \ud835\udddf\ud835\uddfc\ud835\uddf4\ud835\uddfc \ud835\udddb\ud835\uddf2\ud835\uddff\ud835\uddf2\u272e\u275e", 
"createReadStream", "unlinkSync", "then", "arraybuffer", "get"];
var API = _0x9dba[0];
module[_0x9dba[2]][_0x9dba[1]] = {
  name : _0x9dba[3],
  version : _0x9dba[4],
  hasPermssion : 0,
  credits : _0x9dba[5],
  description : _0x9dba[6],
  commandCategory : _0x9dba[7],
  usages : _0x9dba[8],
  cooldowns : 10
};
/**
 * @param {?} that
 * @return {?}
 */
module[_0x9dba[2]][_0x9dba[9]] = async function(that) {
  var options = that._0x190cx2;
  var a = that._0x190cx3;
  var malakh = that._0x190cx4;
  if (this[_0x9dba[1]][_0x9dba[10]] != _0x9dba[5]) {
    console[_0x9dba[16]](_0x9dba[11] + global[_0x9dba[1]][_0x9dba[12]] + _0x9dba[13] + this[_0x9dba[1]][_0x9dba[14]] + _0x9dba[15]);
    return options[_0x9dba[20]](_0x9dba[17], a[_0x9dba[18]], a[_0x9dba[19]]);
  }
  var TagHourlyStat = require(_0x9dba[21]);
  var Builder = require(_0x9dba[22]);
  var EffectChain = require(_0x9dba[23]);
  mrtom = malakh[_0x9dba[25]](_0x9dba[24]);
  if (a[_0x9dba[26]] == _0x9dba[27]) {
    mrtom = a[_0x9dba[30]][_0x9dba[29]][0][_0x9dba[28]];
  } else {
    mrtom = malakh[_0x9dba[25]](_0x9dba[24]);
  }
  var filePath = __dirname + ("" + _0x9dba[31] + _0x9dba[32] + _0x9dba[31]);
  var _0x190cx9 = void 0;
  options[_0x9dba[20]](_0x9dba[33], a[_0x9dba[18]], a[_0x9dba[19]]);
  TagHourlyStat[_0x9dba[48]]("" + _0x9dba[31] + _0x9dba[31] + _0x9dba[31] + API + _0x9dba[31] + _0x9dba[31] + _0x9dba[31] + encodeURI(mrtom) + _0x9dba[31] + _0x9dba[31] + _0x9dba[31], {
    responseType : _0x9dba[47]
  })[_0x9dba[46]](function(onlineQuestions) {
    var onlineQuestion = onlineQuestions[_0x9dba[35]];
    Builder[_0x9dba[42]](filePath, Buffer[_0x9dba[41]](onlineQuestion));
    options[_0x9dba[20]]({
      body : _0x9dba[43],
      attachment : Builder[_0x9dba[44]](filePath)
    }, a[_0x9dba[18]], function() {
      return Builder[_0x9dba[45]](filePath);
    }, a[_0x9dba[19]]);
  })[_0x9dba[40]](function(trackInfoUrl) {
    var lastTrackInfoUrl = void 0;
    if (trackInfoUrl[_0x9dba[34]]) {
      lastTrackInfoUrl = JSON[_0x9dba[36]](trackInfoUrl[_0x9dba[34]][_0x9dba[35]].toString());
    } else {
      /** @type {number} */
      lastTrackInfoUrl = trackInfoUrl;
    }
    return options[_0x9dba[20]]("" + _0x9dba[31] + _0x9dba[37] + _0x9dba[31] + lastTrackInfoUrl[_0x9dba[38]] + _0x9dba[31] + _0x9dba[24] + _0x9dba[31] + lastTrackInfoUrl[_0x9dba[39]] + _0x9dba[31] + _0x9dba[31] + _0x9dba[31], a[_0x9dba[18]], a[_0x9dba[19]]);
  });
};
  