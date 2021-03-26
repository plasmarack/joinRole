module.exports = (client) => {

    // Adding Roles When Reacted
    client.on('messageReactionAdd', async(reaction, user) => {

        const reactionrole = '821225143489658964' // Message ID For Reaction Roles

        if(reaction.message.id === reactionrole && reaction.emoji.name === 'minecraft') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('821588256453820436') // Role You Want To Add When SomeOne Reacts
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'Rust') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('821958133748334613') // Role You Want To Add When SomeOne Reacts
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'SCPSL') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('821953538229403688') // Role You Want To Add When SomeOne Reacts
        }
    })

    // Removing Roles When Reacted
    client.on('messageReactionRemove', async(reaction, user) => {

        const reactionrole = '821225143489658964' // Message ID For Reaction Roles

        if(reaction.message.id === reactionrole && reaction.emoji.name === 'minecraft') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.remove('821588256453820436') // Role You Want To Remove When SomeOne Reacts(Should Be Same As Add One As Above)
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'Rust') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.remove('821958133748334613') // Role You Want To Remove When SomeOne Reacts(Should Be Same As Add One As Above)
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'SCPSL') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.remove('821953538229403688') // Role You Want To Remove When SomeOne Reacts(Should Be Same As Add One As Above)
        }
    })

}
