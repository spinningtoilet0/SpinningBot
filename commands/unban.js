module.exports = {
	name: 'unban',
	description: 'get the client id and unban someone',
	guildOnly: true,
	execute(message) {
		if (message.member.hasPermission('ADMINISTRATOR')) {
			const id = args[0];
			guild.members.unban(id);
			message.channel.send('unbanned');
		}
		else
		{
			message.channel.send('get perms noob');
		}
	},
};
