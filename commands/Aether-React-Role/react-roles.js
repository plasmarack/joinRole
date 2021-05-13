module.exports = (client) => {

    // Adding Roles When Reacted
    client.on('messageReactionAdd', async(reaction, user) => {

        const reactionrole = '842227676394815529' // Message ID For Reaction Roles
        const rulesid = '842227676189032470'

        if(reaction.message.id === reactionrole && reaction.emoji.name === 'pinged') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('841887833122668584') // Role You Want To Add When SomeOne Reacts
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'tourney') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('841887539937673226') // Role You Want To Add When SomeOne Reacts
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'scrims') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('841887591766949898') // Role You Want To Add When SomeOne Reacts
        }

        if(reaction.message.id === rulesid && reaction.emoji.name === 'check') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('841486421339537409') // Role You Want To Add When SomeOne Reacts
        }
    })

    // Removing Roles When Reacted
    client.on('messageReactionRemove', async(reaction, user) => {

        const reactionrole = '842227676394815529' // Message ID For Reaction Roles

        if(reaction.message.id === reactionrole && reaction.emoji.name === 'pinged') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.remove('841887833122668584') // Role You Want To Remove When SomeOne Reacts(Should Be Same As Add One As Above)
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'tourney') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.remove('841887539937673226') // Role You Want To Remove When SomeOne Reacts(Should Be Same As Add One As Above)
        }
        if(reaction.message.id === reactionrole && reaction.emoji.name === 'scrims') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.remove('841887591766949898') // Role You Want To Remove When SomeOne Reacts(Should Be Same As Add One As Above)
        }
    })

}
