let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./galeria/welgc.webp"
let stikerbyegc = "./galeria/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'ᴛʜᴇ 𝙳𝙾𝚁𝚁𝙰𝚃-𝙱𝙾𝚃', body: '©𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 👹', sourceUrl: `https://github.com/GyutaroNc/DORRAT`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'ᴛʜᴇ 𝙳𝙾𝚁𝚁𝙰𝚃-𝙱𝙾𝚃', body: '©𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 👹', sourceUrl: `https://github.com/GyutaroNc/DORRAT`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
