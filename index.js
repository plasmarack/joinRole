const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'USER', 'REACTION']});

client.queue = new Discord.Collection()

const { token } = require('./config.json')
const loadCommands = require('./commands/load-commands');
const EditMessage = require('./utils/EditMessage');
const setup = require('./commands/Reaction-Roles/setup');
const reactRoles = require('./commands/Reaction-Roles/react-roles');
const setup2 = require('./commands/Verify/setup');
const reactRoles2 = require('./commands/Verify/react-roles');   

const AetherRoles = require('./commands/Aether-React-Role/react-roles');  
const AetherSetup = require('./commands/Aether-React-Role/setup');  

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('Online')
    client.users.get("292138463854067722").send("We Probably updated, But we online so gl.");

    setInterval(() => {
        const statuses = [
            `over you`,
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds


    setup(client)
    reactRoles(client)
    AetherRoles(client)
    AetherSetup(client)
    setup2(client)
    reactRoles2(client)
})

client.login(process.env.SkynetToken)
