import fetch from 'node-fetch';

let HS = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un link de mediafire`, m)

try {
let api = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${text}`)
let json = await api.json()
let { FileName, Type, FileSize, Uploaded, ext, mimetype, download:dl_url } = json.data.response
m.reply(`*${FileName}*

- *Tipo :* ${Type}
- *Tamaño :* ${FileSize}
- *Creado :* ${Uploaded}`)
await conn.sendFile(m.chat, dl_url, FileName, null, m, null, { mimetype: ext, asDocument: true })

} catch (error) {
console.error(error)
}}

HS.command = ['mf2']

export default HS
