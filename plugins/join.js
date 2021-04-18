let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalido'
    let res = await conn.query({
        json: ["action", "invite", code]
    })
    if (res.status !== 200) throw res
    m.reply(`Se unió con éxito al grupo ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.prems = true

module.exports = handler