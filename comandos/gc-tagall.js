let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด:* ${pesan}`
let teks = `*โบ๐ธ ๐ฝ ๐ ๐พ ๐ฒ ๐ฐ ๐ฝ ๐ณ ๐พ - ๐ถ ๐ ๐ ๐ฟ ๐พโบ*\n\nโ ${oi}\n\n๐ฅโโชแฉแคขแฎฌแฎชโชโซโ *๐๐ญ๐ข๐ช๐ฎ๐๐ญ๐๐ฌ:*\n`
for (let mem of participants) {
teks += `โ*๐ฒโน โ  @${mem.id.split('@')[0]}\n`}
teks += `*โ*โ ๐โ๐บ๐โฏ๐๐โฏ๐ต๐แชฃ๐ญโฏ๐นโฏ๐โคโ \n\n*โโโโโโโโโโโโโโโโ*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
