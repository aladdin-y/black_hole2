const { Client, GatewayIntentBits,PermissionsBitField, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('..');

client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;

    const button = client.buttons.get(interaction.customId);
    if (!button) return;

    try {
        if(button.permissions) {
            if(!interaction.memberPermissions.has(PermissionsBitField.resolve(button.permissions || []))) {
                const perms = new EmbedBuilder()
                .setDescription(`🚫 ${interaction.user}, You don't have \`${button.permissions}\` permissions to interact this button!`)
                .setColor('Red')
                return interaction.reply({ embeds: [perms], ephemeral: true })
            }
        }
        await button.run(client, interaction);
    } catch (error) {
        console.log(error);
    }
});

let t = false;
client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;

	if(interaction.customId != "claim")return;
    try {
	t = true
	setTimeout(() => {
	t = false},1000);
   const embed1 = new EmbedBuilder()
          .setColor(0x0099FF)
          .setDescription('تم استلام التكت من قبل اداري')
          .setTimestamp();
		  
        const claim2 = new ButtonBuilder()
          .setCustomId('claim2')
          .setLabel(`${interaction.member.user.globalName}`)
          .setEmoji('<:Yaktori_pleverified:1036722260238684231>')
          .setStyle(ButtonStyle.Success)
          .setDisabled(true);

        const row1 = new ActionRowBuilder()
          .addComponents(claim2);

        interaction.message.edit({ embeds: [embed1], components: [row1] });

        interaction.reply(`تم استلام التذكره من قبل <@${interaction.member.id}>`)
    } catch (error) {
        console.log(error);
    }
});
