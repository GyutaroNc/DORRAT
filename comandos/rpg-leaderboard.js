import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, participants, usedPrefix }) => {
let users = Object.entries(global.db.data.users).map(([key, value]) => { 
return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
   let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
     let sortedRole = users.map(toNumber('role')).sort(sort('role'))
      let sortedDorracoins = users.map(toNumber('dorracoins')).sort(sort('dorracoins'))
       let sortedJoincount = users.map(toNumber('joincount')).sort(sort('joincount'))
        let sortedPremium = users.map(toNumber('premium')).sort(sort('premium'))
       
     
      let usersExp = sortedExp.map(enumGetKey)
       let usersLim = sortedLim.map(enumGetKey)
        let usersLevel = sortedLevel.map(enumGetKey)
         let usersRole = sortedRole.map(enumGetKey)
          let usersDorracoins = sortedDorracoins.map(enumGetKey)
           let usersJoincount = sortedJoincount.map(enumGetKey)
            let usersPremium = sortedPremium.map(enumGetKey)
           
console.log(participants)
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
let text = `
       π *TABLA DE CLASIFICACION*
    
β’ *TOP ${len} XP β‘* 
TΓΊ : *${usersExp.indexOf(m.sender) + 1}* de *${usersExp.length} Usuarios*
${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} β‘*`).join`\n`}
βββββββββββββββββ
β’ *TOP ${len} NIVEL π* 
TΓΊ : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length} Usuarios*
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${level} π*`).join`\n`}
βββββββββββββββββ
β’ *TOP ${len} ROL | RANGO πͺ* 
TΓΊ : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length} Usuarios*
${sortedLevel.slice(0, len).map(({ jid, role, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join`\n`}
βββββββββββββββββ
β’ *TOP USUARIOS ${len} PREMIUM ποΈ* 
TΓΊ : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length} Usuarios*
${sortedLim.slice(0, len).map(({ jid, premium, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${premium ? `β` : `β`} ποΈ*`).join`\n`}
βββββββββββββββββ
β’ *TOP ${len} DIAMANTES π* 
TΓΊ : *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length} Usuarios*
${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} π*`).join`\n`}
βββββββββββββββββ
β’ *TOP ${len} TOKENS  β―οΈ* 
TΓΊ : *${usersJoincount.indexOf(m.sender) + 1}* de *${usersJoincount.length} Usuarios*
${sortedJoincount.slice(0, len).map(({ jid, joincount }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${joincount} β―οΈ*`).join`\n`}
βββββββββββββββββ
β’ *TOP ${len} DORRATCOINS πͺ*
TΓΊ : *${usersDorracoins.indexOf(m.sender) + 1}* de *${usersDorracoins.length} Usuarios*
${sortedDorracoins.slice(0, len).map(({ jid, dorracoins }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${dorracoins}  πͺ*`).join`\n`}
`.trim()
 //await m.reply(text, null, { mentions: conn.parseMention(text) })
await conn.sendButton(m.chat, wm, text, null, [
['πππ£πͺ ππͺπππ€π¨ π‘', '#juegosdelgrupo'], 
['πππ£ππ€π¨ πΉ', '#rol']], m, { mentions: conn.parseMention(text) })   
}
handler.help = ['top']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top'] 
//handler.register = true
handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
