let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ π²ππ΄π°π³πΎπ π΄π wa.me/50582783643*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD` },
'mimetype': `application/${document}`,
'fileName': `γ  π«πΆπΉπΉπ―βπ»=π©πΆπ» γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/GyutaroNc/DORRAT',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/channel/UCgRkBSSvHQ1g4PP8R6r8v5g' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'βοΈπΌπ΄π½πβοΈ'}, type: 1}, 
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'πΈπ½πππ°π»π°ππ±πΎππ '}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ππ₯ ππ‘ππ¦π πΉ;;;\nFN:ππ₯ ππ‘ππ¦π πΉ\nORG:ππ₯ ππ‘ππ¦π πΉ\nTITLE:\nitem1.TEL;waid=50582783643:+505 8278 3643\nitem1.X-ABLabel:ππ₯ ππ‘ππ¦π πΉ\nX-WA-BIZ-DESCRIPTION:[β] α΄α΄Ι΄α΄α΄α΄α΄α΄ α΄ α΄sα΄α΄ Ι΄α΄α΄ α΄α΄Κα΄ α΄α΄sα΄s Ιͺα΄α΄α΄Κα΄α΄Ι΄α΄α΄s.\nX-WA-BIZ-NAME:ππ₯ ππ‘ππ¦π πΉ\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'ππ₯ ππ‘ππ¦π πΉ', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
