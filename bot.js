const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const commands = require('./commands');
const utils = require('./utils');

client.on('ready', () => {
  
})

client.on('message', message => {

})

client.on('disconnect', (msg, code) => {
  if (code === 0) return console.error(msg)
});