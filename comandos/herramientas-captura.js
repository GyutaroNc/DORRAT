import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let full = /f$/i.test(command)
  if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π»πΈπ½πΊ π³π΄ ππ½π° πΏπ°πΆπΈπ½π° πΏπ°π΅π° π·π°π²π΄π π²π°πΏππππ°n\n*ε Ejemplo:*\n ${usedPrefix + command} https://github.com/GyutaroNc/DORRAT`
  conn.reply(m.chat, global.wait, m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'Error.png', '*π¦ Captura de la Pagina*', m)
}

handler.help = ['captura']
handler.tags = ['herramientas']
handler.command = /^(ssweb|ss|cap|screenshot|captura)$/i

export default handler
