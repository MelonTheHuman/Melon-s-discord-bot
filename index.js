const mySecret = process.env['TOKEN']
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log('logged in as ' + client.user.tag)
})

client.on("message", msg => {
  if (msg.content === "hello") {
    msg.reply("world")
  }
})

client.login(mySecret)