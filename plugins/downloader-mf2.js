import fetch from 'node-fetch';

let HS = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un link de mediafire`, m)

try {
let api = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${text}`)
let json = await api.json()
let { filename, type, size, uploaded, ext, mimetype, download:dl_url } = json.data.response
m.reply(`*${filename}*

- *Tipo :* ${type}
- *Tamaño :* ${size}
- *Creado :* ${uploaded}`)
await conn.sendFile(m.chat, dl_url, filename, null, m, null, { mimetype: ext, asDocument: true })

} catch (error) {
console.error(error)
}}

HS.command = ['mf2']

export default HS
