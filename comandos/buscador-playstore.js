import fetch from 'node-fetch' 
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
    if (!text) throw `*_*[β] πΈπ½πΆππ΄π΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π»π° π°πΏπΏ πππ΄ πππΈπ΄ππ° π³π΄ππ²π°ππΆπ°π*._*`
    try {
    let res = await fetch(`https://api.akuari.my.id/downloader/apkdownloader?query=${text}`)
    let json = await res.json()
    let { version, updated, developer, id, requirements, installed } = json.info
    let pp = await (await fetch('https://telegra.ph/file/e867ad919a98764a4d719.jpg')).buffer()
    let info = `*π¦ β’ VersiΓ³n:* ${version}\n*π β’ ActualizaciΓ³n:* ${updated}\n*π β’ Desarrollador:* ${developer}\n*βΉοΈ β’ ID:* ${id}\n*π± β’ Android:* ${requirements}\n*π‘οΈ β’ Instalada:* ${installed}`
    await conn.sendNyanCat(m.chat, `${info}\n\n${global.wait}`, pp, `β’ Downloader Play Store π`, wm, 'https://github.com/GyutaroNc/DORRAT', m)
    
conn.sendMessage(m.chat, { document: { url: `${json.apkdownload}` }, mimetype: 'application/videos.android.package-archive', fileName: `${text}.apk` }, { quoted: m })
} catch { m.reply('β οΈ *_Resultados no encontrados._*') }
}
handler.help = ['apkdl *<nombre de apk>*']
handler.tags = ['downloader']
handler.command = ['dlapk', 'apkdl'] 
export default handler
