const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let owner =` 
*HEAR IS BOT OWNER INFO*
*NAME:-* *USMAN.S*
*AGE:-* *## YEARS*
*PUBLIC NAME:-* *ISHARA-MD*

> *BY LAKSHITHA ISHARA🍁*
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "SILENTLOVER432",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'LAKSHITHA ISHARA',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://wa.me/+94776406272?text=HY LAKSHITHA" ,
thumbnailUrl: "https://i.postimg.cc/Z553vPvx/LK.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
