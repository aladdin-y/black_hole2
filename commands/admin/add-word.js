const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
	name: 'add-word',
	description: "the bot will send the login panel.",
	aliases: [],
	cooldown: 0,
	userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {
		const login_panel = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('الرد التلقائي')
		.setDescription(`اختر الزر المناسب لك`)
		.setThumbnail(config.logo)

		.setFooter({ text: 'Black Hole', iconURL: config.logo});
	
		const add = new ButtonBuilder()
			.setCustomId('add-word-btn')
			.setLabel('اضافة رد تلقائي')
			.setEmoji('1191449120242667620')
			.setStyle(ButtonStyle.Success );
			
		const remove = new ButtonBuilder()
			.setCustomId('delete-word-btn')
			.setLabel('حذف رد تلقائي')
			.setEmoji('1191449120242667620')
			.setStyle(ButtonStyle.Danger );


		const all = new ButtonBuilder()
			.setCustomId('get-all-words')
			.setLabel('رؤية كل الكلمات')
			.setEmoji('1191451133118517308')
			.setStyle(ButtonStyle.Primary );


			const row = new ActionRowBuilder()
			.addComponents(add,remove,all);

			
	message.channel.send({ embeds: [login_panel] , components: [row]	});
	}
};