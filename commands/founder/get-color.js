const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
	name: 'get-color',
	description: "get the founder role color.",
	aliases: ["h"],
	cooldown: 0,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
        function rgbToHex(rgb) {
            // استخراج مكونات اللون
            const r = (rgb >> 16) & 0xFF;
            const g = (rgb >> 8) & 0xFF;
            const b = rgb & 0xFF;
        
            // تحويل إلى HEX
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
        
            
         if(message.member.roles.cache.has("1096209903896506378")){
	const role = message.guild.roles.cache.get("1096209903896506378");
const colorValue = role.color;
 message.reply( rgbToHex(colorValue));

         }
	}
};