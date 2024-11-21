const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fuQDSDjb#r4gnrYglQRPMgRMhoG2FYyyWUEOv4SDTZIYkB_TwY84",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/SKKKjt69/cyberpunk-katana-dog-digital-art-hd-wallpaper-1920x1080-uhdpaper-com-590-0-b.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "❁ ════ ❃•◯•❃ ════ ❁                      CREATOR=Lakshitha Ishara〽️හායි! ${pushname} කොහොමද?මම ඔන්ලයින් ඉන්නෝ!ඔබ මේ බාවිතා කරන්නේ ISHARA MD බොට් ය.මෙහි මෙනුව ලබා ගැනීමට .menu විදානය ලබා දෙන්න.                                                                          CREATED BY LAKSHITHA ISHARA🍁

",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "ISHARA-MD",
};
