let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [md]
let gata = [imagen1, imagen4]
let dos = [md]  

let texto0 = `${ag}ππ πΎπππΌπΏππ ππΌ ππππππππππΏπ ππππΌ ππππΎπππ πΏπ πππππππΌπ ππ π½ππ πππππππΌππππππ πΌ ππππππ ππππππΌ ππΌπ ππΌππΏπ π πππ ππΌ ππππΎπππ *${usedPrefix}serbot*`
let texto1 = `${mg}πππ ππ πΎπππΌππΏπ πΎπππ ππππ πππππππ\n*${usedPrefix + command} enlace de Grupo y NΓΊmero de Token(s)*\n*${usedPrefix + command} ${grupos.getRandom()} 3*\n\n*3* πππππ πͺ = *30* πππππππ`
let texto2 = `${ag}Β‘ππΌ ππ ππππππ ππππππ! πͺ\n\nπΎπππππΌ ππππππ ππΌππΌ πππΏππ ππππ πΏπ€π§π§ππ©π½ππ πΌ ππ πππππ πΎππ ππ πΎπππΌππΏπ:\n*${usedPrefix}buy joincount 3*`
let texto3 = `${fg}ππππΌπΎπ ππ ππΌπππΏπ. πΏππ½π πππ ππππΌπΎπ πΏπ πππππ πΏπ πππΌπππΌππ\n*${usedPrefix + command} ${grupos.getRandom()} 3*`
let texto4 = `${mg}πππππππ ππ ππππππ πΏπ πππππ(π)\n*3* πππππ πͺ = *30* πππππππ`
let texto5 = `${fg}ππππππ *3* πππππ(π) ππΌππΌ πππΏππ ππππ πΌ πΏππππΌππ½ππ`
let texto6 = `${fg}ππΌππππ *3* πππππ(π) ππΌππΌ πππΏππ ππππ πΌ πΏπ€π§π§ππ©π½ππ`

let texto7 = `β ππ ππΌ ππππΏπ πΏππππΌππ½ππ πΌπ πππππ!`

let img1 = 'https://img.freepik.com/vector-premium/animacion-monedas-pixeles-imagenes-animacion-moneda-oro-ilustracion-vectorial_350225-3.jpg?w=2000'
let img2 ='https://img.freepik.com/premium-vector/set-8bit-pixel-graphics-icons-game-art-coins-gold-animation_534389-12.jpg?w=2000'

if (!global.db.data.settings[conn.user.jid].temporal) return conn.sendButton( m.chat, wm, texto0, null, [[`π πππππΎπππΌπ πΎπππΌππΏπ`, `.reporte *Quiero unir a DorratBot en mΓ­ Grupo. Por favor Active la funciΓ³n #botemporal*`], [`π π π π π`, `.menu`]], fkontak, m) 

if (!args[0]) return conn.sendButton( m.chat, wm, texto1, null, [[`π π π π π`, `.menu`]], fkontak, m)
let [_, code] = args[0].match(linkRegex) || []

if (!linkRegex.test(args[0])) return conn.sendButton( m.chat, wm, texto3, null, [[`π π π π π`, `.menu`]], fkontak, m)
let user = db.data.users[m.sender]

if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y NΓΊmero de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN πͺ = 30 MINUTOS*`
//if (!linkRegex.test(args[0])) throw `${fg}ππππΌπΎπ ππ ππΌπππΏπ.` //AquΓ­ 
if (user.joincount <= 1) return conn.sendButton( m.chat, wm, texto2, img1, [[`πͺ πΎπππππΌπ : π½ππ 3 ${rpgshopp.emoticon('joincount')}`, `.buy joincount 3`]], fkontak, m)
if (isNaN(args[1])) return conn.sendButton( m.chat, wm, texto4, img1, [[`π π π π π`, `.menu`]], fkontak, m)
if (args[1] < 3) return conn.sendButton( m.chat, wm, texto5, img2, [[`π π π π π`, `.menu`]], fkontak, m)
if (args[1] > 3) return conn.sendButton( m.chat, wm, texto6, img2, [[`π π π π π`, `.menu`]], fkontak, m) //Solo ingresarΓ‘ si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code)
await conn.sendButton( m.chat, texto7, `${await conn.getName(res)} | ` + wm, null, [[`π π π π π`, `.menu`]], fkontak, m).then(async() => { 
user.joincount -= args[1] 
var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
var now = new Date() * 1
 
if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.sendButton( m.chat, wm, `β ππ ππΌ ππππΏπ πΌπ πππππ!!!\n${await conn.getName(res)}\n\nπππΎππππΏπ πππ ππ β³ πππππππΌπ, πππ ππ πΎπππΌππΏπ *${usedPrefix}menu* ππΌππΌ πππ ππ ππππ\n\nπͺ ππ ππΌππΏππ πΌπππππΌπππΎπΌπππππ ππ:\n${msToDate(global.db.data.chats[res].expired - now)}\n\n*${username}* ππ ππππΏπΌ *${user.joincount}* πππππ(π)πͺ\n\nβ ππππΏπ πππΌπ ππ πΎπππΌππΏπ *${usedPrefix + command}* ππΌππ½πππ ππ ππ πππππ πππππππΌπ ππππ ππ\n\nβ\n*${usedPrefix + command}*\n\nβ ππΌππΌ πππΌ πππππ πππππππππΎππΌ, πΏππ½π πΏπ πππ πΌπΏπππ\n\nβ ππ πΎπΌππ πππ ππ πΌπΏπππ ππ πππππππ πΏππ πππππ π ππππππΌ πππ ππππππΌ ππ ππ ππΌ πππΏππ`, null, [[`+30 πππππππ ππ πππππ`, `${usedPrefix + command} ${args[0]} 3`], [`π π π π π`, `.menu`]], fkontak, m)
await conn.sendButton( m.chat, botdate, `${igfg} ππ ππ π½ππ πΏπ πππΌπππΌππ πππ ππ πΌπππΏπΌππΌ πππΌππππΌπ πΏπππππππππ πΌπΎπππππΏπΌπΏππ πͺ πΌπ πππππΌπΏπ π πππππ π ππΌππ½πππ ππ ππΌπ πΌ πΏπππππππ π πΎππ πππ πππππππππ ππππΎπππππ, πΏπππππππΌ πΏπ πΏππππΌππ½ππ!!!  π\n\π£π  πΏππππΌππ½ππ πππ ππππππΌπΏπ πππ:\n*${username}*`, gata.getRandom(), [[`π ππππ πΎπππππππ`, `.allmenu`]], fkontak, m)
//for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//let data = (await conn.onWhatsApp(jid))[0] || {}
  //if (data.exists) 
    //conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarΓ‘ a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*Β‘YA NO TIENES TOKENS! πͺ*\n\n*COMPRA TOKENS PARA PODER INVITAR A DORRATBOT A TΓ GRUPO CON EL COMANDO *${usedPrefix}buy joincount 3 o ${usedPrefix}buy Para ver la Tienda*`
 if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y NΓΊmero de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN πͺ = 30 MINUTOS*`
if (!linkRegex.test(args[0])) throw `${fg}ππππΌπΎπ ππ ππΌπππΏπ.` //AquΓ­ 

let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `β *SE HA UNIDO DORRATBOT AL GRUPO!!!*`, m).then(async() => { //Si el Owner se une al Grupo no habrΓ‘ temporizador
let img = './Menu2.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `β SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES β³ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENΓ*\n\nπͺ *ME SALDRΓ AUTOMΓTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) πͺ*\n\nβ *PUEDE USAR EL COMANDO TAMBIΓN EN GRUPO MIENTRAS ESTE YO*\n\nβ *SI QUIERE QUE ESTE POR MΓS TIEMPO AUMENTE EL NΓMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\nβ *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA NO SE VA PODER*`, m)  
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARΓ A REALIZAR DIFERENTES ACTIVIDADES πͺ AL PRIVADO O GRUPO Y TAMBIΓN TE VAS A DIVERTIR π CON SUS MULTIPLES FUNCIONES, DISFRUTA DE DORRATBOT!!! π*\n\nπ *DORRATBOT FUE INVITADO POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarΓ‘ a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creador', `/creadora`], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], m, res) })}
}
handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd']
export default handler

function msToDate(ms) {
let temp = ms
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " *DΓ­a(s)* βοΈ\n" + hours + " *Hora(s)* β³\n" + minutes + " *Minuto(s)* β°\n" + sec + " *Segundo(s)* π\n";
}
