const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const ms = require('ms');
const config = client.config;

module.exports = {
	name: 'dm-msg',
	description: "to send message to member in dm.",
	aliases: [],
	cooldown: 0,
		userPerms: ["Administrator"],
	botPerms: [],
	run: async (client, message, args) => {


        let member = message.mentions.members.first();
        if (!member) return message.reply("الرجاء منشن شخص");
        const msg = message.content.split(`!dm-msg <@${member.id}>`)[1];

        member.send(msg).then(() => {
            message.reply("تم ارسال الرسالة للعضو المطلوب")
        }).catch((err) => {
            if(err){message.reply("لا يمكنني ارسال رسالة لهاذا العضو (مقفل خاصو🙃)")}
        });
        ;
	}
};