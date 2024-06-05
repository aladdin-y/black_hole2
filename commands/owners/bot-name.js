const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const ms = require('ms');
const config = client.config;

module.exports = {
	name: 'bot-name',
	description: "to change the bot name.",
	aliases: [],
	cooldown: 0,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
		const owners = config.owners;
		let owner = false;
	 owners.forEach(member => {
		if(message.member.id == member) owner = true
	 });
			
	 if(!owner) return message.reply("انت لست اونر")

	 const name = message.content.split("!bot-name")[1];

	 if(!name)return message.reply("الرجاء اضافة اسم البوت");
	 client.user.setUsername(name);
	 message.reply("تم تغير اسم البوت الى "+ name + "بنجاح")
	 
	}
};