let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
*[βππππβ] π»π°π π΅ππ½π²πΈπΎπ½π΄π πΏπ°ππ° ππ΄π π±πΎπ (#ππππππ, #πππππππ, #ππππ, #πππππππ, #πππππππ, #πππππππππ) π½πΎ π΄πππ°π½ π°π²πππ°π»πΌπ΄π½ππ΄ π΅ππ½π²πΈπΎπ½π°π»π΄π πΏπ°ππ° π΄πππ΄ π±πΎπ (β πβπΊπβ―ππβ―π΅παͺ£π­β―πΉβ―πβ€β )*

*ββ πΏππ΄π³π΄ πΏππΎπ±π°π πΈπ½πππ°π»π°π π³π΄ππ³π΄ π²π΄ππΎ π΄π» π±πΎπ ππΈπΆππΈπ΄π½π³πΎ ππ½ tutorial de instalaciΓ³n*

*ββ π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ*
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/GyutaroNc/DORRAT
> cd DORRAT
> yarn install 
> npm install
> npm update
> npm install 
> npm start*`
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
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'πΈπ½πππ°π»π°ππ±πΎπ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(porsiacasoxd)/i
export default handler

