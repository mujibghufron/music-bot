const commando = require('discord.js-commando');
const path = require('path');
//const config = require(path.join(__dirname, 'config', 'config.json'))
const client = new commando.CommandoClient({
    owner: process.env.ownerId,
    commandPrefix: process.env.prefix
});
client.login("NTk2NTI1MDQ3NDg5ODg4Mjc0.XqKN-g.yIOSE0vu9wjTlD4RXj5uLBw0ut0");
client.registry.registerGroups([
    ['mod', 'mod commands'],
    ['misc', 'misc commands'],
    ['roles', 'roles commands'],
    ['music', 'music bot commands']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log("Bot has logged in.");
});