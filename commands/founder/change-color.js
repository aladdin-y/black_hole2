const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
	name: 'change-color',
	description: "change founder role color.",
	aliases: ["r"],
	cooldown: 0,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
        if(message.member.roles.cache.has("1096209903896506378")){

        const role = message.guild.roles.cache.get("1096209903896506378");
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
        role.edit({
            color: randomColor
    
        }).catch(err => {
            return message.reply("حصل خطأء اثناء تعديل الون الرجاء المحاولة مره اخرى")
        })
    
	}
	}
};