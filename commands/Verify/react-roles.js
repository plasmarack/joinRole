module.exports = (client) => {

    // Adding Roles When Reacted
    client.on('messageReactionAdd', async(reaction, user) => {

        const reactionrole = '821225143489658964' // Message ID For Reaction Roles

        if(reaction.message.id === reactionrole && reaction.emoji.name === 'Member') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('821209711743336488') // Role You Want To Add When SomeOne Reacts
        }
    })

    // Removing Roles When Reacted
    client.on('messageReactionRemove', async(reaction, user) => {

        const reactionrole = '821225143489658964' // Message ID For Reaction Roles

        if(reaction.message.id === reactionrole && reaction.emoji.name === 'Member') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.remove('821209711743336488') // Role You Want To Remove When SomeOne Reacts(Should Be Same As Add One As Above)
        }
    })

}
