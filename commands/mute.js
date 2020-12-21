const { muteRoleToFind } = require('../config.json');

module.exports = {
	name: 'mute',
	description: 'Tag a member and mute them.',
	execute(message) {
    	if (message.member.hasPermission('ADMINISTRATOR')) {
			var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let role = message.guild.roles.cache.find(role => role.name === muteRoleToFind);
 
            if(!role) return message.reply("Couldn't find the mute role.")
 
            person.roles.add(role.id);
 	
	    console.log(person + ' was muted.');
            message.channel.send(`@${person.user.tag} has now been unmuted.`);
        }
        else
        {
            message.channel.send('get perms noob');
        }
	},
};
