const client = require("../.")
const db = client.suggest;
const { Client, GatewayIntentBits, Partials, Collection ,EmbedBuilder,ActionRowBuilder,TextInputBuilder,TextInputStyle, ModalBuilder, ButtonBuilder, ButtonStyle,  StringSelectMenuBuilder, StringSelectMenuOptionBuilder,Events, Emoji} = require('discord.js');

module.exports = {
	id: 'reply',
	permissions: ["Administrator"],
	run: async (client, interaction) => {
        const modal = new ModalBuilder()
        .setCustomId('reply-modal')
        .setTitle('الرد على الأقتراح');


    const reply = new TextInputBuilder()
        .setCustomId('reply')
        .setLabel("الرد?")
        .setStyle(TextInputStyle.Short);

    const firstActionRow = new ActionRowBuilder().addComponents(reply);

    modal.addComponents(firstActionRow);

    // Show the modal to the user
    await interaction.showModal(modal);

    }
};
