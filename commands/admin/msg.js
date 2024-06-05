const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const ms = require('ms');
const config = client.config;

module.exports = {
	name: 'msg',
	description: "to make the bot send your message.",
	aliases: [],
	cooldown: 0,
		userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {


        const msg = message.content.split("!msg")[1];

        message.delete();
        message.channel.send(msg);
	}
};