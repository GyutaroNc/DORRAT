let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `${ag}ππΌ ππππΎπππ *#on antitoxicos* ππππΌ πΏπππΌπΎππππΌπΏπΌ, πΏππ½π πΏπ πΌπΎππππΌπ πΏππΎππΌ ππππΎπππ ππΌππΌ πΏπππ½ππππππΌπ ππππ πΎπππΌππΏπ`, fkontak, m) 
let who
let pp = './Menu2.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}ππππππππ πΌ ππΌ πππππππΌ πππ ππ ππ ππΌ πππππππΌπ πππΌ πΌπΏπππππππΎππΌ β οΈ\n\nπππππππ\n*${usedPrefix + command} @tag*`
user.warn -= 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `β»οΈ *@${who.split`@`[0]}*`} πΊπ¬ π³π¬ πΈπΌπ°π»πΆ πΌπ΅π¨ π¨π«π½π¬πΉπ»π¬π΅πͺπ°π¨`, `*ADVERTENCIA : WARNING*\nβ οΈ *Antes: ${user.warn + 1}/4*\nβ οΈ *Ahora: ${user.warn}/4*\n\n${wm}`, pp, [
[`π πππΌπΎππΌπ`, '.ok'],
['π πππππππΌπππ', '.inventario'],
['π¦ ππππ', '/menu']], false, { mentions: [who] }) //[m.sender]
	
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
//handler.command = /^(delwarn|deladvertir|deladvertencia|delwarning|)$/i
handler.command = /^(del|delete|eliminar|\-)advertir|advertencia|warn(ing)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
