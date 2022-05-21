let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
══════ ×㊄㊅㊆× ══════

   ༒ ☹︎  𝑨  𝑹  𝑬  §  ☺︎︎ ༒︎

╚════               ════╝

 *◤✨𝗛ola, ${username}!◢*
 
 *𝕄𝔼ℕ𝕌 𝔻𝔼 © 乂 𝐀𝐑𝐄𝐒 乂*
═════════════════════
    *𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ*
╠ ඬ⃟ℹ️️ _${usedPrefix}infobot_
╠ ඬ⃟ℹ️️ _${usedPrefix}labiblia_
╠ ඬ⃟ℹ️ _${usedPrefix}estado_
╠ ඬ⃟ℹ️ _¿Qué es un Bot?_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
      *ℂℝ𝔼𝔸𝔻𝕆ℝ*

╠ ඬ⃟👻 ${usedPrefix}owner

═════════════════════
      *𝕋𝕆ℙ'𝕊 /*
╠ 🎖️ .${usedPrefix}top10gays
╠ 🎖️ {usedPrefix}toplind@s
╠ 🎖️ ${usedPrefix}topput@s
╠ 🎖️ ${usedPrefix}toppajer@s
╠ 🎖️ ${usedPrefix}topotakus

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
     *𝕁𝕌𝔼𝔾𝕆𝕊*
╠ 🕹 _${usedPrefix}math *modo*_
╠ 🎮 _${usedPrefix}ttt *nombre del la sala*_
╠ 🕹 _${usedPrefix}delttt *nombre del la sala*_
╠ 🎮 _${usedPrefix}2gay *@tag*_
╠ 🕹 _${usedPrefix}gay *@tag / nombre*_
╠ 🎮 _${usedPrefix}lesbi *@tag / nombre*_
╠ 🕹 _${usedPrefix}pajero *@tag / nombre*_
╠ 🎮 _${usedPrefix}pajera *@tag / nombre*_
╠ 🕹 _${usedPrefix}puta *@tag / nombre*_
╠ 🎮 _${usedPrefix}puto *@tag / nombre*_
╠ 🕹 _${usedPrefix}rata *@tag / nombre*_
╠ 🎮 _${usedPrefix}manco *@tag / nombre*_
╠ 🕹 _${usedPrefix}manca *@tag / nombre*_
╠ 🎮 _${usedPrefix}formarpareja_
╠ 🕹 _${usedPrefix}dado_
╠ 🎮 _${usedPrefix}simsimi *texto*_
╠ 🕹 _${usedPrefix}formartrio_
╠ 🎮 _${usedPrefix}love *@tag / nombre*_
╠ 🕹 _${usedPrefix}amigorandom_
╠ 🎮 _${usedPrefix}slot *cantidad*_
╠ 🕹 _${usedPrefix}ppt *piedra / papel / tijera*_
╠ 🎮 _${usedPrefix}prostituta *@tag / nombre*_
╠ 🕹 _${usedPrefix}prostituto *@tag / nombre*_
╠ 🎮 _${usedPrefix}doxear *@tag / nombre*_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
════════════════════
   *𝔻𝔼𝔸ℂ𝔸ℝ𝔾𝔸𝕊*
╠ 📥 _${usedPrefix}imagen *texto*_
╠ 📥 _${usedPrefix}ytsearch *texto*_
╠ 📥 _${usedPrefix}dlaudio *link yt*_
╠ 📥 _${usedPrefix}dlvid *link yt*_
╠ 📥 _${usedPrefix}ytmp3 *link yt*_
╠ 📥 _${usedPrefix}ytmp4 *link yt*_
╠ 📥 _${usedPrefix}ytmp3.2 *link yt*_
╠ 📥 _${usedPrefix}ytmp4.2 *link yt*_
╠ 📥 _${usedPrefix}play *titulo del audio*_
╠ 📥 _${usedPrefix}play.1 *titulo del audio*_
╠ 📥 _${usedPrefix}play2 *titulo del video*_
╠ 📥 _${usedPrefix}play.2 *titulo del video*_
╠ 📥 _${usedPrefix}play3 *titulo del audio/video*_
╠ 📥 _${usedPrefix}play4 *titulo del video*_
╠ 📥 _${usedPrefix}letra *nombredelacanción*_
╠ 📥 _${usedPrefix}google *texto*_
╠ 📥 _${usedPrefix}googlef *texto*_
╠ 📥 _${usedPrefix}wikipedia *palabra clave*_
╠ 📥 _${usedPrefix}pinterestvideo *link de pinterest*_
╠ 📥 _${usedPrefix}tiktok *link*_
╠ 📥 _${usedPrefix}acortar *link*_
╠ 📥 _${usedPrefix}pinterest *texto*_
╠ 📥 _${usedPrefix}xnxx *link de xnxx*_
╠ 📥 _${usedPrefix}xnxxsearch *texto*_
╠ 📥 _${usedPrefix}ssweb *link*_
╠ 📥 _${usedPrefix}igstory *username*_
╠ 📥 _${usedPrefix}igstalk *username*_
╠ 📥 _${usedPrefix}animeinfo *nombre del anime*_
╠ 📥 _${usedPrefix}twvid *link de video de twitter*_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
════════════════════
    *𝔾𝔼𝕊𝕋𝕀𝕆ℕ 𝔻𝔼 𝔾ℝ𝕌ℙ𝕆𝕊* 
╠ 💎 _${usedPrefix}admins *texto*_ 
╠ 💎 _${usedPrefix}añadir *numero*_ 
╠ 💎 _${usedPrefix}sacar @tag_
╠ 💎 _${usedPrefix}save *@tag + nombre de contacto*_
╠ 💎 _${usedPrefix}daradmin *@tag*_
╠ 💎 _${usedPrefix}quitaradmin *@tag*_
╠ 💎 _${usedPrefix}grupo *abrir / cerrar*_
╠ 💎 _${usedPrefix}enable nsfw_
╠ 💎 _${usedPrefix}disable nsfw_
╠ 💎 _${usedPrefix}enable welcome_
╠ 💎 _${usedPrefix}disable welcome_
╠ 💎 _${usedPrefix}enable antilink_
╠ 💎 _${usedPrefix}disable antilink_
╠ 💎 _${usedPrefix}enable antilink2_
╠ 💎 _${usedPrefix}disable antilink2_
╠ 💎 _${usedPrefix}enable delete_
╠ 💎 _${usedPrefix}disable  delete_ 
╠ 💎 _${usedPrefix}link_
╠ 💎 _${usedPrefix}notificar *texto*_
╠ 💎 _${usedPrefix}setname *Nuevo nombre del grupo*_
╠ 💎 _${usedPrefix}setdesc *Nueva descripción del grupo*_
╠ 💎 _${usedPrefix}infogrupo_
╠ 💎 _${usedPrefix}invocar *texto*_
╠ 💎 _${usedPrefix}del *responder a un mensaje del bot*_
╠ 💎 _${usedPrefix}fantasmas_
╠ 💎 _${usedPrefix}banchat_
╠ 💎 _${usedPrefix}unbanchat_

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
╠ _${usedPrefix}calc *expresión matemática*_ 
╠ _${usedPrefix}spamwa *numero|texto|cantidad*_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
 *ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +18*
╠ Usar bajo su responsabilidad 
╠ ඬ⃟🔞 _${usedPrefix}labiblia_

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
═════════════════════
*𝔼𝔽𝔼ℂ𝕋𝕆𝕊- ℕ𝕆𝕋𝔸𝕊 𝔻𝔼 𝕍𝕆ℤ* 
*𝕐 𝔸𝕌𝔻𝕀𝕆𝕊*
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
║▌│█║▌│ █║▌│█│║▌║

⬧⃤   *ᴳᵒᵈ🅐̣̣̣ 🅡̣̣̣ 🅔̣̣̣ 🅢̣̣̣࿐*  ⬧⃤  
`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menusimple)$/i
handler.fail = null
module.exports = handler
