import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/GyutaroNc/DORRAT/master/galeria/JSON/itzy.json`)).data  
let dorrat = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`, wm, dorrat, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
handler.help = ['itzy','kpopitzy']
handler.tags = ['internet']
handler.command = /^(itzy|kpopitzy)$/i
export default handler
