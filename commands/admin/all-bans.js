const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
	name: 'all-bans',
	description: "to see all bans in server.",
	aliases: [],
	cooldown: 0,
		userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {
		if(!message.member.permissions.has('BAN_MEMBERS')) return;
		message.guild.bans.fetch()
	.then(bans => {
			  
	  let list = bans.map(user => `- ${user.user.username}`).join('\n');
		
	  if (list.length >= 1950) list = `${list.slice(0, 1948)}`;
	
	  const embed = new EmbedBuilder()
		 .setColor('Random')
	  .setTitle(`${bans.size} users are banned :`)
	  .setDescription(`
	**${list}**
		  `)
	
	 message.reply({embeds : [embed]})
	})
	.catch(console.error);
	}
};