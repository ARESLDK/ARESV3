const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/sticker")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*Random img π½*", 'Β© δΉ π π π π δΉ', 'πΎ SIGUIENTE πΎ', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(imagenrandom)$/i
module.exports = handler
