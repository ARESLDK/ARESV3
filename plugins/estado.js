let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ミ▲ Hola estimado usuario ▲彡*

* ⬧⃤ ✘  Estado del Bot ✘⬧⃤ *
*=> Bot activo ✔️*
*=> Bot uso público ✔️*
`.trim(), '© ᴳᵒᵈ𝑨 𝑹 𝑬 𝑺࿐- Bot', '🔷️ MENÚ 🔷', `${usedPrefix}menu`, '🔶️ MENÚ SIMPLE 🔶️', `${usedPrefix}menusimple`, '💠️ MENÚ AUDIOS 💠️', `${usedPrefix}menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
