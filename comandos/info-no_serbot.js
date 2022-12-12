let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝚂 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝙱𝙾𝚃 (#𝚜𝚎𝚛𝚋𝚘𝚝, #𝚓𝚊𝚍𝚒𝚋𝚘𝚝, #𝚋𝚘𝚝𝚜, #𝚐𝚎𝚝𝚌𝚘𝚍𝚎, #𝚜𝚞𝚋𝚋𝚘𝚝𝚜, #𝚜𝚎𝚛𝚜𝚞𝚋𝚋𝚘𝚝) 𝙽𝙾 𝙴𝚂𝚃𝙰𝙽 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰𝙻𝙴𝚂 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 (†𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤†)*

*—◉ 𝙿𝚄𝙴𝙳𝙴 𝙿𝚁𝙾𝙱𝙰𝚁 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙳𝙴𝚂𝙳𝙴 𝙲𝙴𝚁𝙾 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝙳𝙾 𝚄𝙽 tutorial de instalación*

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
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
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/GyutaroNc/DORRAT',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/channel/UCgRkBSSvHQ1g4PP8R6r8v5g' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: '𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(porsiacasoxd)/i
export default handler

