import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen4, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'πΏππππΌπ-π½ππ', body: 'ππ₯ ππ‘ππ¦π πΉ', sourceUrl: `https://github.com/GyutaroNc/DORRAT`, thumbnail: imagen1}}})}
    
return !0 }
export default handler
