const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.suggest;

module.exports = {
	name: 'remove-suggest',
	description: "remove suggest channel.",
	aliases: [],
	cooldown: 0,
	userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {
        let channel = message.mentions.channels.first();
        if(!channel) return message.reply("الرجاء منشن شات صحيح");
		
            if(!await db.has(channel.id))return message.reply("هاذا الشات غير مفعل");

            await db.delete(channel.id)
message.reply("تم ازالة الشات بنجاح")

	}
};