const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const db = client.suggest;

module.exports = {
	name: 'add-suggest',
	description: "add auto line channel",
	aliases: [],
	cooldown: 0,
	userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {

        let channel = message.mentions.channels.first();
		
		if(!channel) return message.reply("الرجاء منشن شات صحيح");
		
		if(await db.has(channel.id))return message.reply("هاذة الشات مفعلة من قبل");

		await db.set(channel.id, {status:true})
		message.reply("تم تفعيل الشات بنجاح")
	}
};