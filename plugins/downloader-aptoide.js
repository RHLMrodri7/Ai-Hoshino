import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) {
return m.reply("Ingresa el nombre de la app que quieres buscar")
}
    
try {
let api = await fetch(`https://api.dorratz.com/v2/apk-dl?=${text}`)
let json = await api.json()
let { name, creator, package, dllink, lastUpdate, size, icon,  mimetype } = json.result
let txt = `- *Nombre* : ${name}
- *Creador* : ${creator}
- *Package*: ${package}
- *Link*: ${dllink}
- *Fecha*: ${lastUpdate}
- *Peso*: ${size} `

await conn.sendFile(m.chat, icon, image.jpg', txt, m)
await conn.sendMessage(m.chat, { document: { url: dllink }, mimetype: mimetype, name: name + '.apk', caption: null }, {quoted: m})
} catch (error) {
console.error(error)
}}

handler.command = /^(apk)$/i

export default handler
