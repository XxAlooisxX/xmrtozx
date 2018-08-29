const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});







client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`ولكم نورت السيرفر ضيف البوت راح يعجبك : https://discordapp.com/api/oauth2/authorize?client_id=462901621769371648&permissions=2146958583&scope=bot ${member} `) 
}).catch(console.error)

});





client.login(process.env.BOT_TOKEN);
