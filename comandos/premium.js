let handler = m => m
export async function all(m) {
let user = global.db.data.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
await m.reply(`${ag}*@${m.sender.split`@`[0]} ¡𝐒𝐄 𝐀𝐂𝐀𝐁𝐎 𝐓𝐔 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!*\n𝐒𝐈 𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐎𝐁𝐓𝐄𝐍𝐄𝐑 𝐔𝐍 𝐍𝐔𝐄𝐕𝐎 𝐏𝐀𝐒𝐄 𝐃𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐀 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎\n*#pase premium*`, false, { mentions: [m.sender] })
user.premiumTime = 0
user.premium = false
}}}
