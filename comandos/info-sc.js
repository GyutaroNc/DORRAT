let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com/GyutaroNc/DORRAT*`
let buttonMessage= {
'document': { url: `https://github.com/GyutaroNc/DORRAT` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
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
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','script']
export default handler
