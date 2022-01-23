const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const commands = require('./commands');
const utils = require('./utils');

client.on('ready', () => {
  let userCount = 0
  client.guilds.cache.forEach(guild => (userCount += guild.memberCount))
})

client.on('message', message => {
  //checks that message was meant for bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return
  //exits if message isn't in a server
  if (!message,guild) return

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
})

client.login(config.token)