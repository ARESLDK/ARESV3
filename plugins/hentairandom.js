let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'          
heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Hentai By ShadowBot*', 'Β© δΉ π π π π δΉ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(hentai|hentay)$/i
module.exports = handler
