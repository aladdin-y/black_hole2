const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
	name: 'unban-all',
	description: "to unban all members has ban.",
	aliases: [],
	cooldown: 0,
		userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {
		let b = await message.guild.bans.fetch()
		if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't Have permissions")
		b.forEach(ban => message.guild.members.unban(ban.user))
				message.reply(`**✅ ${b.size} members has been unbanned.🛬**`)

	}
};