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

𒈞  *⬧⃤   ƛ  Ʀ  Є  Ƨ  ⬧⃤ *  𒈞

══════ ×㊄㊅㊆× ═══════
 
 *✨𝗛ola, ${username}!!*


     *𝕄𝔼ℕ𝕌 𝔻𝔼 © 乂 𝐀𝐑𝐄𝐒 乂*
═════════════════════
    *𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ*

╠ ඬ⃟ℹ️️ _${usedPrefix}infobot_
╠ ඬ⃟ℹ️ _¿Qué es un Bot?_
╠ ඬ⃟👻 _${usedPrefix}owner_(creador)
═════════════════════
      *𝕋𝕆ℙ'𝕊 /*

╠ 🎖️ ${usedPrefix}top10gays
╠ 🎖️ ${usedPrefix}toplind@s
╠ 🎖️ ${usedPrefix}topput@s
╠ 🎖️ ${usedPrefix}toppajer@s
╠ 🎖️ ${usedPrefix}topotakus

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
     *𝕁𝕌𝔼𝔾𝕆𝕊*

╠ ${usedPrefix}math *modo*
╠ ${usedPrefix}ttt *nombre del la sala*
╠ ${usedPrefix}delttt *nombre del la sala*
╠ ${usedPrefix}2gay *@tag*
╠ ${usedPrefix}gay *@tag / nombre*
╠ ${usedPrefix}lesbi *@tag / nombre*
╠ ${usedPrefix}pajero *@tag / nombre*
╠ ${usedPrefix}pajera *@tag / nombre*
╠ ${usedPrefix}puta *@tag / nombre*
╠ ${usedPrefix}puto *@tag / nombre*
╠ ${usedPrefix}rata *@tag / nombre*
╠ ${usedPrefix}manco *@tag / nombre*
╠ ${usedPrefix}manca *@tag / nombre*
╠ ${usedPrefix}formarpareja
╠ ${usedPrefix}dado
╠ ${usedPrefix}simsimi *texto*
╠ ${usedPrefix}formartrio
╠ ${usedPrefix}love *@tag / nombre*
╠ ${usedPrefix}amigorandom
╠ ${usedPrefix}slot *cantidad*
╠ ${usedPrefix}ppt *piedra / papel / tijera*
╠ ${usedPrefix}prostituta *@tag / nombre*
╠ ${usedPrefix}prostituto *@tag / nombre*
╠ ${usedPrefix}doxear *@tag / nombre*

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
═════════════════════

   *𝔻𝔼𝔸ℂ𝔸ℝ𝔾𝔸𝕊*

╠ ${usedPrefix}imagen *texto*
╠ ${usedPrefix}ytsearch *texto*
╠ ${usedPrefix}dlaudio *link yt*
╠ ${usedPrefix}dlvid *link yt*
╠ ${usedPrefix}ytmp3 *link yt*
╠ ${usedPrefix}ytmp4 *link yt*_
╠ ${usedPrefix}ytmp4.2 *link yt*
╠ .${usedPrefix}play *titulo del audio*
╠ ${usedPrefix}play2 *titulo del video*
╠ ${usedPrefix}play3 *titulo del audio/video*
╠ ${usedPrefix}play4 *titulo del video*
╠ ${usedPrefix}letra *nombredelacanción*
╠ ${usedPrefix}letra *nombredelacanción*
╠ ${usedPrefix}google *texto*
╠ ${usedPrefix}googlef *texto*
╠ ${usedPrefix}wikipedia *palabra clave*
╠ ${usedPrefix}pinterestvideo *link de pinterest*
╠ ${usedPrefix}tiktok *link*
╠ ${usedPrefix}acortar *link*
╠ ${usedPrefix}pinterest *texto*
╠ ${usedPrefix}xnxx *link de xnxx*
╠ ${usedPrefix}xnxxsearch *texto*
╠ ${usedPrefix}ssweb *link*
╠ ${usedPrefix}igstory *username*
╠ ${usedPrefix}igstalk *username*
╠ ${usedPrefix}animeinfo *nombre del anime*
╠ ${usedPrefix}twvid *link de video de twitter*

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
═════════════════════

    *𝔾𝔼𝕊𝕋𝕀𝕆ℕ 𝔻𝔼 𝔾ℝ𝕌ℙ𝕆𝕊* 

╠  _${usedPrefix}admins *texto*_ 
╠  _${usedPrefix}añadir *numero*_ 
╠  _${usedPrefix}sacar @tag_
╠  _${usedPrefix}save *@tag + nombre*_
╠  _${usedPrefix}daradmin *@tag*_
╠  _${usedPrefix}quitaradmin *@tag*_
╠  _${usedPrefix}grupo *abrir / cerrar*_
╠  _${usedPrefix}enable nsfw_
╠  _${usedPrefix}disable nsfw_
╠  _${usedPrefix}enable welcome_
╠  _${usedPrefix}disable welcome_
╠  _${usedPrefix}enable antilink_
╠  _${usedPrefix}disable antilink_
╠  _${usedPrefix}enable antilink2_
╠  _${usedPrefix}disable antilink2_
╠  _${usedPrefix}enable delete_
╠  _${usedPrefix}disable  delete_ 
╠  _${usedPrefix}link_
╠  _${usedPrefix}notificar *texto*_
╠  _${usedPrefix}infogrupo_
╠  _${usedPrefix}invocar *texto*_
╠  _${usedPrefix}del 
╠  _${usedPrefix}fantasmas_
╠  _${usedPrefix}banchat_
╠  _${usedPrefix}unbanchat_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
═════════════════════

       *ℂℝ𝔼𝔸𝔻𝕆ℝ𝔼𝕊*

╠ 🧧 _${usedPrefix}s_
╠ 🧧 _${usedPrefix}sticker_
╠ 🧧 _${usedPrefix}semoji_
╠ 🧧 _${usedPrefix}wasted_
╠ 🧧 _${usedPrefix}stonks_
╠ 🧧 _${usedPrefix}trash_
╠ 🧧 _${usedPrefix}rainbow_
╠ 🧧 _${usedPrefix}circle_
╠ 🧧 _${usedPrefix}trigger_
╠ 🧧 _${usedPrefix}stickermaker_
╠ 🧧 _${usedPrefix}attp *texto*_
╠ 🧧 _${usedPrefix}style *texto*_
╠ 🧧 _${usedPrefix}attp2 *texto*_
╠ 🧧 _${usedPrefix}stickerfilter_
╠ 🧧 _${usedPrefix}trigger *@tag*_
╠ 🧧 _${usedPrefix}mp3 *responde a un video*_
╠ 🧧 _${usedPrefix}img *responde a un sticker*_
╠ 🧧 _${usedPrefix}blur *responde a una imagen*_
╠ 🧧 _${usedPrefix}swm *link de imagen de google*_
╠ 🧧 _${usedPrefix}gif *responde a un sticker/video*_
╠ 🧧 _${usedPrefix}tovideo *responde a una nota de voz*_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
═════════════════════

 *ℝ𝔸ℕ𝔻𝕆𝕄 / 𝔼𝕏𝕋ℝ𝔸𝕊*

╠ ඬ⃟👾 _${usedPrefix}frase_
╠ ඬ⃟👾 _${usedPrefix}futbol_
╠ ඬ⃟👾 _${usedPrefix}Messi_
╠ ඬ⃟👾 _${usedPrefix}animal_
╠ ඬ⃟👾 _${usedPrefix}meme_
╠ ඬ⃟👾 _${usedPrefix}meme2_
╠ ඬ⃟👾 _${usedPrefix}meme3_
╠ ඬ⃟👾 _${usedPrefix}cat_
╠ ඬ⃟👾 _${usedPrefix}dog_
╠ ඬ⃟👾 _${usedPrefix}pikachu_
╠ ඬ⃟👾 _${usedPrefix}waifu_
╠ ඬ⃟👾 _${usedPrefix}blackpink_
╠ ඬ⃟👾 _${usedPrefix}reto_
╠ ඬ⃟👾 _${usedPrefix}verdad_
╠ ඬ⃟👾 _${usedPrefix}imagenrandom_
╠ ඬ⃟👾 _${usedPrefix}neko_
╠ ඬ⃟👾 _${usedPrefix}lolivid_
╠ ඬ⃟👾 _${usedPrefix}iqtest_
╠ ඬ⃟👾 _${usedPrefix}kpopitzy_
╠ ඬ⃟👾 _${usedPrefix}navidad_
╠ ඬ⃟👾 _${usedPrefix}loli_
╠ ඬ⃟👾 _${usedPrefix}gawrgura_
╠ ඬ⃟👾 _${usedPrefix}miku_
╠ ඬ⃟👾 _${usedPrefix}nyan_
╠ ඬ⃟👾 _${usedPrefix}pat_
╠ ඬ⃟👾 _${usedPrefix}itachi_
╠ ඬ⃟👾 _${usedPrefix}slap_
╠ ඬ⃟👾️ _${usedPrefix}pat_
╠ ඬ⃟👾 _${usedPrefix}perfil_
╠ ඬ⃟👾 _${usedPrefix}scan_
╠ ඬ⃟👾 _${usedPrefix}kpop_
╠ ඬ⃟👾 _${usedPrefix}qr *texto*_
╠ ඬ⃟👾 _${usedPrefix}afk *motivo*_
╠ ඬ⃟👾 _${usedPrefix}CristianoRonaldo_
╠ ඬ⃟👾 _${usedPrefix}pregunta *pregunta*_
╠ ඬ⃟👾 _${usedPrefix}mention *texto*_
╠ ඬ⃟👾 _${usedPrefix}spamchat *texto*_
╠ ඬ⃟👾 _${usedPrefix}traducir es *texto*_
╠ ඬ⃟👾 _${usedPrefix}zodiac *AAAA MM DD*_
╠ ඬ⃟👾 _${usedPrefix}readmore *texto1| texto2*_
╠ ඬ⃟👾 _${usedPrefix}calc *expresión matemática*_ 
╠ _${usedPrefix}spamwa *numero|texto|cantidad*_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
 *ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +18*

╠ Usar bajo su responsabilidad 
╠ ඬ⃟🔞 _${usedPrefix}labiblia_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
*𝔼𝔽𝔼ℂ𝕋𝕆𝕊- ℕ𝕆𝕋𝔸𝕊 𝔻𝔼 𝕍𝕆ℤ 𝕐 𝔸𝕌𝔻𝕀𝕆𝕊*
 Responde a un audio o nota de voz

╠ 🎤 _${usedPrefix}bass_
╠ 🎤 _${usedPrefix}deep_
╠ 🎤 _${usedPrefix}earrape_
╠ 🎤 _${usedPrefix}fast_
╠ 🎤 _${usedPrefix}fat_
╠ 🎤 _${usedPrefix}nightcore_
╠ 🎤 _${usedPrefix}reverse_
╠ 🎤 _${usedPrefix}robot_
╠ 🎤 _${usedPrefix}slow_
╠ 🎤 _${usedPrefix}smooth_
╠ 🎤 _${usedPrefix}vibracion *cantidad*_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
     *𝔸𝕌𝔻𝕀𝕆𝕊* 
╠ ඬ⃟🔊 _${usedPrefix}menuaudios_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
  *ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆*

╠ ඬ⃟📳 _${usedPrefix}start_
╠ ඬ⃟📳 _${usedPrefix}next_
╠ ඬ⃟📳 _${usedPrefix}leave_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════

 *𝕃𝕆𝔾𝕆𝕊 ℙ𝔼ℝ𝕊𝕆ℕ𝔸𝕃𝕀ℤ𝔸𝔻𝕆𝕊*

╠ ඬ⃟📝️ _${usedPrefix}logos_ (lista)
╠ ඬ⃟📝️ _${usedPrefix}lolice_
╠ ඬ⃟📝️ _${usedPrefix}simpcard_
╠ ඬ⃟📝️ _${usedPrefix}hornycard_ 
╠ ඬ⃟📝️ _${usedPrefix}lblackpink_
╠ ඬ⃟📝️ _${usedPrefix}coffe *texto*_
╠ ඬ⃟📝️ _${usedPrefix}tahta *texto*_
╠ ඬ⃟📝️ _${usedPrefix}nulis *texto*_
╠ ඬ⃟📝️ _${usedPrefix}nulis2 *texto*_
╠ ඬ⃟📝️ _${usedPrefix}lolice *@tag*_
╠ ඬ⃟📝️ _${usedPrefix}simpcard *@tag*_
╠ ඬ⃟📝️ _${usedPrefix}logotaza *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}logocesped *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}logotaza2 *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}flaming *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}logofire *texto*_
╠ ඬ⃟📝️ _${usedPrefix}logosky *texto*_
╠ ඬ⃟📝️ _${usedPrefix}logocorazon *texto*_
╠ ඬ⃟📝️ _${usedPrefix}logorandom *texto*_
╠ ඬ⃟📝️ _${usedPrefix}neonfire *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}technology *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}playa *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}ytcomment *texto*_ 
╠ ඬ⃟📝️ _${usedPrefix}lovemessages *texto*_
╠ ඬ⃟📝️ _${usedPrefix}cementerio *texto*_
╠ ඬ⃟📝️ _${usedPrefix}romanticdouble *texto*_
╠ ඬ⃟📝️ _${usedPrefix}romanticmessages *texto*_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
════════════════════
 
    *𝔻 𝕀 𝕆 𝕊 𝔼 𝕊*

╠ ඬ⃟👑 _${usedPrefix}boost_
╠ ඬ⃟👑 _${usedPrefix}restart_
╠ ඬ⃟👑 _${usedPrefix}banlist_
╠ ඬ⃟👑 _${usedPrefix}binario1_
╠ ඬ⃟👑 _${usedPrefix}binario2_
╠ ඬ⃟👑 _${usedPrefix}banchat2_
╠ ඬ⃟👑 _${usedPrefix}actualizar_
╠ ඬ⃟👑 _${usedPrefix}CajaFuerte_
╠ ඬ⃟👑 _${usedPrefix}unbanchat2_
╠ ඬ⃟👑 _${usedPrefix}bc *texto*_
╠ ඬ⃟👑 _${usedPrefix}deletechat_
╠ ඬ⃟👑 _${usedPrefix}mutechat_
╠ ඬ⃟👑 _${usedPrefix}bcgc *texto*_
╠ ඬ⃟👑 _${usedPrefix}bcbot *texto*_
╠ ඬ⃟👑 _${usedPrefix}mutechat *all*_
╠ ඬ⃟👑 _${usedPrefix}setbye *@tag*_
╠ ඬ⃟👑 _${usedPrefix}banuser *@tag*_
╠ ඬ⃟👑 _${usedPrefix}deletechat *all*_
╠ ඬ⃟👑 _${usedPrefix}mutechat *chat*_
╠ ඬ⃟👑 _${usedPrefix}mutechat *group*_
╠ ඬ⃟👑 _${usedPrefix}enable *public*_
╠ ඬ⃟👑 _${usedPrefix}disable *public*_
╠ ඬ⃟👑 _${usedPrefix}deletechat *chat*_
╠ ඬ⃟👑 _${usedPrefix}deletechat *group*_
╠ ඬ⃟👑 _${usedPrefix}unbanuser *@tag*_
┣ ඬ⃟👑 _${usedPrefix}listgroup *@tag*_
╠ ඬ⃟👑 _${usedPrefix}enable *restrict*_
╠ ඬ⃟👑 _${usedPrefix}enable *autoread*_
╠ ඬ⃟👑 _${usedPrefix}setwelcome *@tag*_
╠ ඬ⃟👑 _${usedPrefix}enable *autoread*_
╠ ඬ⃟👑 _${usedPrefix}disable *autoread*_

▌│█║▌║▌│█║║║▌║▌║█│`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '*© ƛ  Ʀ  Є  Ƨ  🕷️⃟⃥✞︎⸸³³³*', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
