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

// *[ ❀ YTMP4 ]*
import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un link de youtube`, m)

try {
let api = await fetch(`https://delirius-apiofc.vercel.app/download/ytmp4?url=${text}`)
let json = await api.json()
let { title, author, image:img, id, views, likes, comments, duration, download } = json.data
let HS = `- *Titulo :* ${title}
- *Autor :* ${author}
- *Visitas :* ${views}
- *Likes :* ${likes}
- *Comentarios :* ${comments}

*[ INFO ARCHIVO AUDIO ]*

- *Tamaño :* ${download.size}
- *Calidad :* ${download.quality}`
await conn.sendFile(m.chat, img, 'HasumiBotFreeCodes.jpg', HS, m)
await await conn.sendMessage(m.chat, { video: { url: download.url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `` }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = /^(ytmp4)$/i

export default handler
