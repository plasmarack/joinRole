const { MessageEmbed } = require('discord.js')
const EditMessage = require('../../utils/EditMessage') // For Editing Text or Adding Emojis

module.exports = (client) => {
    EditMessage(client, '825135961276284988', new MessageEmbed() // Your Channel ID
    .setTitle('Reaction Roles')
    .setColor('RED')
    .setDescription(`You must agree to our server rules, terms of service to continue with joining this discord server, Please read over <#821209731858825266> and <#821209733955715133> before continue. Please react with <:Member:821224366061912074> to get the member role and continue.`)
    .setFooter('Fornite Bot')
    , ['<:Member:821224366061912074>'] // Your Emojis
    )
}
