const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  await message.delete()
  if(message.author.id !== "178657593030475776") return;
  return message.reply("Hi! I'm an example command").then(m => m.delete(10000))
}
//name this whatever the command name is.
module.exports.help = {
  name: "example"
}
