const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
	name: 'restart',
	description: "to restart the bot.",
	aliases: [],
	cooldown: 0,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        message.reply("سيتم اعادة تشغيل البوت خلال 5-10 ثواني");
        setTimeout(() => {
            process.exit();

        }, 1000)

	}
};