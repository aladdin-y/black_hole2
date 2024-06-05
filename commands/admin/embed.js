const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Create a rich embed.',
	run: async (client, message, args) => {
        try {
            const embedData = JSON.parse(args.join(' '));

            if (embedData.color) {
                embedData.color = parseInt(embedData.color.replace('#', ''), 16);
            }
            const embed = new EmbedBuilder(embedData);
            message.channel.send({ embeds: [embed] });
            message.delete();
        } catch (error) {
            return message.reply("يمكنك عمل رسالة ايمبيد عن طريق \n https://msbah.xyz/embed")
        }
    }
};
