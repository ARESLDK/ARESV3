const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
  if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let res = await axios("https://meme-api.herokuapp.com/gimme/lesbians")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*Lesbians*", 'Β©δΉ ππππ δΉs - Bot', 'π₯΅ SIGUIENTE π₯΅', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(imglesbians)$/i
module.exports = handler
