import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ° π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½π° π²π°ππ΄πΆπΎππΈπ° π³π΄ π·π΄π½ππ°πΈ, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} miku*`
try {
m.reply(global.wait)
let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`)    
let json = await res.json()
let aa = json.result[0].id
let aa2 = json.result[0].title_native
let res2 = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${aa}?apikey=${lolkeysapi}`)
let json2 = await res2.json()
let aa3 = json2.result
await conn.sendMessage(m.chat, { document: { url: aa3 }, mimetype: 'application/pdf', fileName: `${aa2}.pdf` }, { quoted: m })
} catch {
throw `*[β] π΄πππΎπ, πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ πΎ πΏπππ΄π±π΄ π²πΎπ½ πΎπππ° π²π°ππ΄πΆπΎππΈπ°*`
}}
handler.command = /^(hentaipdf)$/i
export default handler
