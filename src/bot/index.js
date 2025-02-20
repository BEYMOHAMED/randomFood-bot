const Discord = require('discord.js');
const bot = new Discord.Client();
const food = require('./food.js');

const aws = require('aws-sdk');

let s3 = new aws.S3({
  TOKEN: process.env.TOKEN,
});

const token = s3.config.TOKEN;



bot.on('message', message => {
  if(message.content.toLowerCase() == 'food') {
    const rand = Math.floor(Math.random() * food.length);
    message.channel.sendMessage(`${food[rand].name} => ${food[rand].price} €`)
  }
})

bot.on('ready', () => {
  bot.user.setPresence({game: {name: 'Random meal for you (:'}})
})

bot.login(token);