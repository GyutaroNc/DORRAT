const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_γπΆ π·πΎπ»π° ${name} πε½‘_*

γ€γ€ *π³οΈ<βπΈππΈ π½ππΌβππΌ/>π*

- π°πππΈ πΏππ΄π³π΄ πΆππ°ππ³π°π πΌπ΄π½ππ°πΉπ΄π πππ΄ πππΈπ΄ππ°π ππ΄π πΌπ°π ππ°ππ³π΄

*<πΈπΎβπΌπΎπΈβ πΈ ππΈ πππππΈ/>*

Β° π³οΈ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
Β° π³οΈ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
Β° π³οΈ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
Β° π³οΈ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
Β° π³οΈ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
Β° π³οΈ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<πππππΈ π»πΌ βπππΈβπ»ππ/>*

Β° π³οΈ _${usedPrefix}listamsg_
Β° π³οΈ _${usedPrefix}listavn_
Β° π³οΈ _${usedPrefix}listavideo_
Β° π³οΈ _${usedPrefix}listaaudio_
Β° π³οΈ _${usedPrefix}listaimg_
Β° π³οΈ _${usedPrefix}listasticker_

*<ππΌβ ππΌππππ π πΈβββππππ/>*

Β° π³οΈ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}versticker *<texto/comando/palabra clave>*_

*<πΌππππβπΈβ/>*

Β° π³οΈ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
Β° π³οΈ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/GyutaroNc/DORRAT', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
