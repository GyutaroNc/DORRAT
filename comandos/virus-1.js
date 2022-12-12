import fecth from 'node-fetch'
let handler  = async (m, { conn }) => {
let info = await fetch('https://raw.githubusercontent.com/GyutaroNc/DORRAT/master/galeria/crash/traba5.txt').then(v => v.text());
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *by 𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 👹 🔥', 'status@broadcast')}
handler.command = ['virus1', 'c1', 'binario1', 'traba1', 'crash1'] 
handler.rowner = true
handler.fail = null
export default handler
