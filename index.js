const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log('Loaded: ' + file);
}

client.once('ready', () => {
	console.log('Client is ready!');
});

client.on('message', message => {
	if (message.author.bot) {
		return;
	}

	console.log(message.member.user.tag + ' said: ' + message.content);
	
	if (!message.content.startsWith(prefix)) {
		return;
	}

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	try {
		command.execute(message, args);
		console.log('executed command: ' + commandName);
	} catch (error) {
  		console.error(error);
	}

	if (!command) {
		console.log('no command listed');
		return;
	}

	if (command.guildOnly && message.channel.type === 'dm') {
		console.log('no ' + commandName + ' in dms');
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		console.log('no args');
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			console.log('sent command usage');
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
		console.log('sent reply');
	}
});

client.login(token);
