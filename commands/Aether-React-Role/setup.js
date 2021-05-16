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
    .setDescription(`The following rules are to be followed at all times during your time within our server. Breaking any of the rules may result in a warning, followed by a kick or ban depending on the severity of the issue.`)
    .addFields(
    { name: '1. Do not post Not Safe For Work stuff in any chat besides NSFW.',
    value: 'If you have to question your content, do not post it. If you post Gore, You will be removed.'},

    { name: '2. Be respectful to each member of the server',
    value: 'Arguments should not find their home here.'},

    { name: '3. Spamming of any kind is not acceptable in any channel',
    value: 'Whether that is a text or voice channel. Don\'t abuse Discord mentions also.'},

    { name: '4. No excessive amounts of swearing',
    value: 'Let\'s not have it reach obnoxious levels.'},

    { name: '5. No derogatory terms or other inappropriate language',
    value: 'There is no place for it here.'},

    { name: '6. No offensive Discord avatars or usernames',
    value: 'If it\'s not allowed within ordinary channels, it shouldn\'t be visible to anyone on the server.'},

    { name: '7. No advertising or Discord invites to other unrelated servers',
    value: 'This applies to DMs to members of the server.'},

    { name: '8. No publishing of personal information',
    value: 'This is a very serious offence and can lead to game and Discord permanent bans. Also make sure to follow Discords TOS at all times in here.'},

    { name: '9. Use common sense',
    value: 'We cannot account for every possibility, think before you speak.'},

    { name: '10. Use the language we can moderate, English',
    value: 'We can only moderate the languages our moderators speak!'},

    { name: '11. Do not sabotage any games.',
    value: 'This service is provided to help players improve and gain money. If you throw or sabotage people expierence it affects us and makes them no longer want to play here. If you wish to report this open a ticket with evidence and report a player.'},

    { name: '12. Riot Terms Of service',
    value: 'You must follow Riot TOS at all times, Failure will result in immediate termination of your account with our service. Located at https://www.riotgames.com/en/terms-of-service (This includes asking for boosts, etc)'},

    { name: '13. Toxicity is heavily moderated',
    value: 'We understand losing a game is very annoying, But going out of your way to curse somebody out or ruin the fun for other is unacceptable and will result in 1 warning before you being removed from our service.'},

    { name: '14. Lying about your rank is frowned upon',
    value: 'Lying about your rank is not allow, If it is clearly a joke like \"Papercup 3\", It is okay then. (We are here to have fun, not to be the fun police.)'},

    { name: '15. Staff Have Final Say',
    value: 'Staff members always have final say in situations where a punishment is involved or being told to do something (within our games).'}
  )

    .setFooter('If you agree to the rules, Please react below.')
    , ['<:check:842221380060708886>'] // Your Emojis
    )
}
