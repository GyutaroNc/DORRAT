let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro π has minado','πβ¨ Genial!! Obtienes','WOW!! eres un gran Minero βοΈ Obtienes','Felicidades!! Ahora tienes','βοΈβοΈβοΈ Obtienes'])}`
let pp = './galeria/menudorrat3.jpg'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].dorracoins += d * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `*π Vuelva en ${msToTime(time - new Date())} para continuar minando βοΈ*`  

conn.sendHydrated(m.chat, `*${minar} ${d} DORRAT-COINS*`, wm, pp, md, 'π π«πΆπΉπΉπ¨π»-π©πΆπ» π', null, null, [
['π ππ‘ππ₯ ππ«π£ β‘', `.minar`],
['ππ₯π¨π£π’ π’ππππππππ¦ π', `.grupos`],
], m,)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  
  

//m.reply(`*${minar} *${hasil} ππ*`)

}
handler.help = ['minar']
handler.tags = ['dorratcoins']
handler.command = ['minardorracoins', 'miming4', 'mine4', 'minarcoins', 'minarcoims', 'minardorrecoins'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
