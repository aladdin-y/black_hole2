const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const ms = require('ms');
const config = client.config;

module.exports = {
	name: 'bot-img',
	description: "to change the bot img.",
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

	 const img = args[0];

	 if(!img)return message.reply("الرجاء اضافة صورة للبوت");

     await client.user.setAvatar(`${img}`);
	 message.reply("تم تغير صورة البوت الى "+ img)
	 
	}
};