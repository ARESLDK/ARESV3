const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Cristianoronaldo")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, url, "*Siiiuuuuuu*", '© 乂 𝐀𝐑𝐄𝐒 乂 - Bot', '⚽ SIGUIENTE ⚽', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(cristianoronaldo)$/i
module.exports = handler
