const { MessageEmbed } = require('discord.js')
const EditMessage = require('../../utils/EditMessage') // For Editing Text or Adding Emojis

module.exports = (client) => {
    EditMessage(client, '842214559048794163', new MessageEmbed() // Your Channel ID
    .setTitle('Reaction Roles')
    .setColor('GREEN')
    .setDescription(`React with a <:pinged:842220090727858225> To get Notified role.
    React with a <:tourney:842219931192918036> To get Tourney Pings role.
    React with a <:scrims:842219467961401364> To get Scrims Pings role.`)
    .setFooter('Reaction Roles')
    , ['<:pinged:842220090727858225>','<:tourney:842219931192918036','<:scrims:842219467961401364>'] // Your Emojis
    )

    EditMessage(client, '841487761588224060', new MessageEmbed() // Your Channel ID
    .setTitle('Rules')
    .setColor('RED')
    .setDescription(`The following rules are to be followed at all times during your time within our server. Breaking any of the rules may result in a warning, followed by a kick or ban depending on the severity of the issue.
    1. Do not post Not Safe For Work stuff in any chat besides NSFW.
    If you have to question your content, do not post it. If you post Gore, You will be removed.
    2. Be respectful to each member of the server
    Arguments should not find their home here.
    3. Spamming of any kind is not acceptable in any channel
    Whether that is a text or voice channel. Don't abuse Discord mentions also.
    4. No excessive amounts of swearing
    Let's not have it reach obnoxious levels.
    5. No derogatory terms or other inappropriate language
    There is no place for it here.
    6. No offensive Discord avatars or usernames
    If it's not allowed within ordinary channels, it shouldn't be visible to anyone on the server.
    7. No advertising or Discord invites to other unrelated servers
    This applies to DMs to members of the server.
    8. No publishing of personal information
    This is a very serious offence and can lead to game and Discord permanent bans. Also make sure to follow Discords TOS at all times in here.
    9. Use common sense
    We cannot account for every possibility, think before you speak.
    10. Use the language we can moderate, English
    We can only moderate the languages our moderators speak!
    If you agree to the rules, Please react below.`)
    .setFooter('Reaction Roles')
    , ['<:check:842221380060708886>'] // Your Emojis
    )
}
