//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
══════ ×㊄㊅㊆× ═══════

𒈞  *⬧⃤  ᴳᵒᵈ𝑨 𝑹 𝑬 𝑺 ⬧⃤ *  𒈞

══════ ×㊄㊅㊆× ═══════
 
▣━◤*✨𝗛ola, ${username}!!*◢━▣

═════════════════════

    *𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ*

╠ ඬ⃟ℹ️️ _${usedPrefix}infobot_
╠ ඬ⃟ℹ️ _¿Qué es un Bot?_
╠ ඬ⃟👻 _${usedPrefix}owner_(creador)
╠ fikura 𝑁𝑦𝑚𝑜𝑠♔︎
═════════════════════
preciona el boton "menu simple"para ver el:

*𝕄𝔼ℕ𝕌 𝔻𝔼 © 乂 𝐀𝐑𝐄𝐒 乂*
𝑁𝑦𝑚𝑜𝑠♔︎
▌│█║▌║▌│█║║║▌║▌║█│`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '*© ᴳᵒᵈ𝑨 𝑹 𝑬 𝑺࿐-🕷️⃟⃥✞︎⸸³³³*', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
