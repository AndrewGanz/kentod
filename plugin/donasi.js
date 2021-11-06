let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [0857-1487-8436]
│ • Axsis [0838-9133-4751]
╰────

╭─「 Donasi • Non Pulsa 」
│ • OVO, Dana [0838-9133-4751]
│ • https://saweria.co/Andreegans
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
