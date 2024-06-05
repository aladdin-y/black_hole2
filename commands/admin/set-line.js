const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.auto_line;

module.exports = {
	name: 'set-line',
	description: "to set the line in auto line channels.",
	aliases: [],
	cooldown: 0,
	userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {
        let link = args[0];
        if(!link)return message.reply("الرجاء اضافة رابط صحيح");

        await db.set("link", {link: link})
        message.reply("تم اضافة الخط بنجاح")

        
	}
};