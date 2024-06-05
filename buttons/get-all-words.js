const client = require("../.")
const config = client.config;
const db = client.words_db;
const { EmbedBuilder } = require('discord.js');

module.exports = {
	id: 'get-all-words',
	permissions: [],
    run: async (client, interaction) => {
        const allWords = await db.all();

// at the top of your file

// inside a command, event listener, etc.
const get_all_words_embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('جميع الردود التلقائية')

	
	.setTimestamp()
    .setFooter({ text: 'Black Hole', iconURL: config.logo});


        allWords.forEach(word => {
            get_all_words_embed.addFields(
                { name: word.id, value: `\`\`\` ${word.value.reply} \`\`\` ` ,inline:true},
               
            )
        });


        return interaction.reply({embeds: [get_all_words_embed], ephemeral: true})



    }
    
};
