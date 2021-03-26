const { MessageEmbed } = require('discord.js')
const EditMessage = require('../../utils/EditMessage') // For Editing Text or Adding Emojis

module.exports = (client) => {
    EditMessage(client, '821209735104692224', new MessageEmbed() // Your Channel ID
    .setTitle('Reaction Roles')
    .setColor('RED')
    .setDescription(`React with a <:SCPSL:821961231333982208> To get SCP:SL role.
    React with a <:Rust:821961787875393536> To get Rust role.
    React with a <a:minecraft:821597307950333963> To get Minecraft role.
    React with a <:pinged:825149405971611678> To get Notified role.`)
    .setFooter('Fornite Bot')
    , ['<a:minecraft:821597307950333963>','<:SCPSL:821961231333982208>','<:Rust:821961787875393536>','<:pinged:825149405971611678>'] // Your Emojis
    )
}
