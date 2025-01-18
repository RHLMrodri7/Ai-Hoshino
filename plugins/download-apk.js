import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) {
return m.reply("❀ Ingresa el nomnbre de la app que quieres buscar")
}
    
try {
let api = await fetch('https://delirius-apiofc.vercel.app/download/apk?=${text}`)
let json = await api.json()
let { name, image, developer, download, mimetype } = json.result
let txt = `- *Nombre* : ${name}
- *Creador* : ${developer}`

await conn.sendFile(m.chat, image, 'HasumiBotFreeCodes.jpg', txt, m)
await conn.sendMessage(m.chat, { document: { url: download }, mimetype: mimetype, fileName: name + '.apk', caption: null }, {quoted: m})
} catch (error) {
console.error(error)
}}

handler.command = /^(apk)$/i

export default handler
