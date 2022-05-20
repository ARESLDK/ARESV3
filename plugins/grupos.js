let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*OLAM, TE INVITO A QUE TE UNAS A LOS GRUPOS OFICIALES  DE ARES *

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/FfWCBZMB8BQ0QGlPGsLAnr

*2.-* https://chat.whatsapp.com/K2jwxyOuBWK8E0I2TNIO5b

*3.-* https://chat.whatsapp.com/IEeWbt18rLF1KM3View7l2

`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 乂 𝐀𝐑𝐄𝐒 乂 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
