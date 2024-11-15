const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu3",

    react: "🛸",

    alias: ["panel","list","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = 

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
