module.exports = (client) => {

    // Gives a User a Role when they join the Server
    client.on('guildMemberAdd', async(user) => {
        const role = '920621144590123048' // Role ID
        await user.roles.add(role)
    })

}
