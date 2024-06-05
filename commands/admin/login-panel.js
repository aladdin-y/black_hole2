const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
	name: 'login-panel',
	description: "the bot will send the login panel.",
	aliases: [],
	cooldown: 0,
	userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {
		const login_panel = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('دخول/خروج')
		.setDescription(`اختر ماذا تريد تسجيله بالضغط على زر في الاسفل ،
		تسجيل دخول او تسجيل خروج:`)
		.setThumbnail(config.logo)

		.setFooter({ text: 'Black Hole', iconURL: config.logo});
	
		const login = new ButtonBuilder()
			.setCustomId('login')
			.setLabel('دخول')
			.setEmoji('1191449120242667620')
			.setStyle(ButtonStyle.Primary );


		const logout = new ButtonBuilder()
			.setCustomId('logout')
			.setLabel('خروج')
			.setEmoji('1191451133118517308')
			.setStyle(ButtonStyle.Danger );
			const row = new ActionRowBuilder()
			.addComponents(login, logout);

			
	message.channel.send({ embeds: [login_panel] , components: [row]	});
	}
};