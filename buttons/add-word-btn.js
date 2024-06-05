const client = require("../.")
const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder,  ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');
const config = client.config;
const db = client.words_db;
module.exports = {
	id: 'add-word-btn',
	permissions: [],
	run: async (client, interaction) => {




  
        
        const modal = new ModalBuilder()
        .setCustomId('add-word-modal')
        .setTitle('اضافة رد تلقائي');

    const favoriteColorInput = new TextInputBuilder()
        .setCustomId('word')
        .setLabel("الكلمة")
        .setStyle(TextInputStyle.Short);

    const hobbiesInput = new TextInputBuilder()
        .setCustomId('reply')
        .setLabel("الرد")
        .setStyle(TextInputStyle.Short);

    const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
    const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

    modal.addComponents(firstActionRow, secondActionRow);

    await interaction.showModal(modal);



















    }
};
