const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.suggest;

module.exports = {
	name: 'staff-info',
	description: "get the list of staff info.",
	aliases: [],
	cooldown: 0,
	userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {
		const login_panel = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Staff Start UP')
		.setThumbnail(config.logo)

		.setDescription(`- نرحب بكل اداري بتحصل الشاتات المهمه هنا
        \n
        - ** Staff Rules : قوانين الادارة **

        - ** Ticket Rooms : قوانين التكت **

        - ** Staff Punishments : العقوبات **`)
        .setTimestamp()

		.setFooter({ text: '🪐 BLack Hole', iconURL: config.logo});
	
		const Staff_Rules = new ButtonBuilder()
			.setCustomId('Staff-Rules')
			.setLabel('Staff Rules')
			.setStyle(ButtonStyle.Secondary );


		const Ticket_Rules = new ButtonBuilder()
			.setCustomId('Ticket-Rules')
			.setLabel('Ticket Rules')
			.setStyle(ButtonStyle.Secondary );


		const Staff_Punishments = new ButtonBuilder()
			.setCustomId('Staff-Punishments')
			.setLabel('Staff Punishments')
			.setStyle(ButtonStyle.Secondary );



			const row = new ActionRowBuilder()
			.addComponents( Staff_Rules, Ticket_Rules, Staff_Punishments);

			
	message.channel.send({ embeds: [login_panel] , components: [row]	});

	}
};