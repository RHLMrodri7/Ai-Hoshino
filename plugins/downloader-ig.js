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

// *[ ❀ INSTAGRAM DL (imagen/video) ]*
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat,`❀ Ingresa un enlace de Instagram`, m)
    
try {
let api = await axios.get(`https://restapi.apibotwa.biz.id/api/igdl?url=${args[0]}`)
let json = api.data
    
let media = json.data
let titulo = media.metadata.caption || ''
let likes = media.metadata.like || ''
let comentarios = media.metadata.comment || ''
let mediaUrl = media.url

    
let HS = `- *Titulo :* ${titulo}

- *Likes :* ${toNum(likes)} 
- *Comentarios :* ${toNum(comentarios)} `
      
if (media.metadata.isVideo) {
await conn.sendFile(m.chat, mediaUrl[0], 'instagram.mp4', HS, m)
} else {
for (let url of mediaUrl) {
await conn.sendFile(m.chat, url, 'instagram.jpg', HS, m)
}}    
} catch (error) {
console.error(error)    
}}
    
handler.command = ['instagramdl', 'ig']
handler.tags = ['downloader']
handler.help = ['ig <link>']
export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else if (number <= -1000 && number > -1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number <= -1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()
}}
