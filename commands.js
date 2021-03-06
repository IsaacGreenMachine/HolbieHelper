const fs = require('fs');

const flags = require('./flags')
const config = require('./config');
const utils = require('./utils');

const clips = [

  //here is where the commands for clips will go

]

const sendHelpMenu = message => {

  const clipsList = clips
    .map(clip => {
      return ' **' + clip + '**'
    })
    .join('/n')

  const helpMenu =
    //this needs quotes from type to '/n' but js is being fucky
    type **!bot** followed by any of the following commands
    **help** - reopen this menu
    **random** - play a random quote /n + clipsList

  message.channel.send(helpMenu)
  message.channel.send(
    //<don't know yet
  )
}

const playRandomClip = message => {
  utils.play(message, clips[Math.floor(Math.random() * clips.length)]);
}

module.exports = {
  sendHelpMenu,
  playRandomClip
}