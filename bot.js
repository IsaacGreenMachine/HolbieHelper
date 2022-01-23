const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const commands = require('./commands');
const utils = require('./utils');

client.on('ready', () => {
  
})

client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return

  //arg setup
  const args = message.content.slice(config.prefix.length).split(' ')
  const command = args[1].toLowerCase()

  switch(command {
    case 'random':
      commands.playRandomClip(message);
      break;
  })

})

client.on('disconnect', (msg, code) => {
  if (code === 0) return console.error(msg)
});