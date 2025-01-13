/* 
*❀ By JTxs*

[ Canal Principal ] :
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

[ Canal Rikka Takanashi Bot ] :
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

[ Canal StarlightsTeam] :
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

[ HasumiBot FreeCodes ] :
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// *[ ❀ APK DL ]*
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) {
return m.reply("❀ Ingresa el nomnbre de la app que quieres buscar")
}
    
try {
let api = await fetch(`https://api.giftedtech.my.id/api/download/apkdl?apikey=gifted&appName=${text}`)
let json = await api.json()
let { appname, appicon, developer, download_url, mimetype } = json.result
let txt = `- *Nombre* : ${appname}
- *Creador* : ${developer}`

await conn.sendFile(m.chat, appicon, 'HasumiBotFreeCodes.jpg', txt, m)
await conn.sendMessage(m.chat, { document: { url: download_url }, mimetype: mimetype, fileName: appname + '.apk', caption: null }, {quoted: m})
} catch (error) {
console.error(error)
}}

handler.command = /^(apk)$/i

export default handler
