module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
	guildOnly: true,
	execute(message) {
		if (message.member.hasPermission('ADMINISTRATOR')) {
			if (!message.mentions.users.size) {
				return message.reply('you need to tag a user in order to kick them!');
			}

			const user = message.mentions.users.first();

			guild.members.ban(user);
			message.channel.send(`done bye bye`);
		}
		else
		{
			message.channel.send('get perms noob');
		}
	},
};
