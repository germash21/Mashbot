let handler = function (m) {
  // this.sendContact(m.chat, '8296414861', 'German', m)
  this.sendContact(m.chat, '8296414861', 'German', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
