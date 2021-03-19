const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'USER', 'REACTION']});

client.queue = new Discord.Collection()

const { token } = require('./config.json')
const loadCommands = require('./commands/load-commands');
const EditMessage = require('./utils/EditMessage');
const setup = require('./commands/Reaction-Roles/setup');
const reactRoles = require('./commands/Reaction-Roles/react-roles');


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('Online')

    setInterval(() => {
        const statuses = [
            `over you`,
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds


    setup(client)
    reactRoles(client)
})

client.login(process.env.SkynetToken)
