const ms = require("ms");
const { prefix, bannedRoleToFind } = require('../config.json');

module.exports = {
	name: 'temproleban',
	description: 'Tag a member and temproleban them.',
	execute(message) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
                    const args = message.content.slice(prefix.length).trim().split(/ +/);
	    var person  = message.guild.member(message.mentions.users.first());
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let role = message.guild.roles.cache.find(role => role.name === bannedRoleToFind);
 
            if(!role) return message.reply("Couldn't find the roleban role.")
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt specify a time!");
            }
 
            person.roles.add(role.id);
 
 
            message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
 
            setTimeout(function(){    
                person.roles.remove(role.id);
                console.log(person.user.tag + ' has been unrolebanned.')
                message.channel.send(`@${person.user.tag} has been unrolebanned.`)
            }, ms(time));
        }
        else
        {
            message.channel.send('get perms noob');
        }
	},
};
