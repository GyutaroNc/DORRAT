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
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `${ag}šš¼ šššš¾ššš *#on antitoxicos* šššš¼ šæššš¼š¾šššš¼šæš¼, šæšš½š šæš š¼š¾šššš¼š šæšš¾šš¼ šššš¾ššš šš¼šš¼ šæššš½šššššš¼š šššš š¾ššš¼ššæš`, fkontak, m) 
let who
let pp = './Menu2.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}šššššššš šš ššššššš ššš šš ššššššš šššššššššššš ā ļø\n\nššššššš\n*${usedPrefix + command} @tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat, `${mg}*ESCRIBA EL MOTIVO DE LA ADVERTENCIA*\n` + `*${usedPrefix + command} @${who.split`@`[0]} *Motivo*`, fkontak, m)  
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ššš¾šš½šš ššš¼ š¼šæššššššš¾šš¼ šš šššš ššššš!!\n\nš«µ *${text}*`, `*ADVERTENCIA*\nā ļø *${user.warn}/4*\n\n${wm}`, pp, [
[`š šš šššššš`, '.ok'],
['š« šš®š¹š®š»š°š²', '.balance'],
['š° šššš', '/menu']], false, { mentions: [who] }) //[m.sender]
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`šš šš š¼šæššššššæ šš¼ššš¼š ššš¾šš!!\n*@${who.split`@`[0]}* šššššš¼ššš šš¼š *4* š¼šæššššššš¾šš¼š š¼šššš¼ šššš¼š ššššššš¼šæš š`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
