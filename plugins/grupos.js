let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*OLAM, TE INVITO A QUE TE UNAS A LOS GRUPOS OFICIALES  DE ARES *

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/FfWCBZMB8BQ0QGlPGsLAnr

*2.-* https://chat.whatsapp.com/DGMQBejz1S229wBKTabu4p

*3.-* https://chat.whatsapp.com/K2jwxyOuBWK8E0I2TNIO5b

`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 THE SHADOW BROKERS - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
