const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'USER', 'REACTION']});

client.queue = new Discord.Collection()
const loadCommands = require('./commands/load-commands');

const joinRole = require('./commands/joinRole/joinRole');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('Online')
    client.user.setActivity("Status Here", { type: null} )


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

client.login("OTk5NTA5NjQzNDIyMzUxMzgw.G1I43F.m7zQDFpAu9JqIKoG8--v7l1NS-hzBVV8WyfOKI")
