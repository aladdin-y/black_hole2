const client = require("../.")
const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder,  ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');
const config = client.config;
const db = client.words_db;
module.exports = {
	id: 'delete-word-btn',
	permissions: [],
	run: async (client, interaction) => {




  
        
        const modal = new ModalBuilder()
        .setCustomId('delete-word-modal')
        .setTitle('ازالة رد تلقائي');

    const favoriteColorInput = new TextInputBuilder()
        .setCustomId('word')
        .setLabel("الكلمة")
        .setStyle(TextInputStyle.Short);


    const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);

    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);







    }
};
