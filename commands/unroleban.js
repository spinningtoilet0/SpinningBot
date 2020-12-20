module.exports = {
	name: 'unroleban',
	description: 'Tag a member and unroleban them.',
	guildOnly: true,
	execute(message) {
		        if (message.member.hasPermission('ADMINISTRATOR')) {
		var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            	if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            	let role = message.guild.roles.cache.find(role => role.name === "Clown");
 
            	if(!role) return message.reply("Couldn't find the roleban role.")
 
            	person.roles.remove(role.id);
 	
	    	console.log(person + ' was unrolebanned.');
            	message.channel.send(`@${person.user.tag} has now been unrolebanned.`);
        	}
        	else
        	{
            	message.channel.send('get perms noob');
        	}
	},
};
