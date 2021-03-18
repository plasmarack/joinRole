const { MessageEmbed } = require('discord.js')
const EditMessage = require('../../utils/EditMessage') // For Editing Text or Adding Emojis

module.exports = (client) => {
    EditMessage(client, '821209735104692224', new MessageEmbed() // Your Channel ID
    .setTitle('Reaction Roles')
    .setColor('RED')
    .setDescription(`Please react with <:Member:821224366061912074> receive Member role.
    React with a <a:minecraft:821597307950333963> To get Minecraft role.`)
    .setFooter('Fornite Bot')
    , ['<:Member:821224366061912074>','<a:minecraft:821597307950333963>'] // Your Emojis
    )
}
