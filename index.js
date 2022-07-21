const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'USER', 'REACTION']});
const cfg = required('./config.json');

client.queue = new Discord.Collection()
const loadCommands = require('./commands/load-commands');

const joinRole = require('./commands/joinRole/joinRole');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('Online')
    client.user.setActivity("pathfinderhosting" )


    //setInterval(() => {
        //const statuses = [
            //`Helping Users`,
            //`pathfinderhosting.net`,
            //`Providing Support For All`,
            //`SoonTM`,
        //]

        //const status = statuses[Math.floor(Math.random() * statuses.length)]
        //client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    //}, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds


    joinRole(client)
})

client.login(cfg.tkn)
