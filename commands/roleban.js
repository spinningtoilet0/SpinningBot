const { bannedRoleToFind } = require('../config.json');

module.exports = {
	name: 'roleban',
	description: 'Tag a member and roleban them.',
	execute(message) {
		        if (message.member.hasPermission('ADMINISTRATOR')) {
		var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            	if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            	let role = message.guild.roles.cache.find(role => role.name === bannedRoleToFind);
 
            	if(!role) return message.reply("Couldn't find the roleban role.")
 
            	person.roles.add(role.id);
 	
	    	console.log(person + ' was rolebanned.');
            	message.channel.send(`@${person.user.tag} has now been rolebanned.`);
        	}
        	else
        	{
            	message.channel.send('get perms noob');
        	}
	},
};
