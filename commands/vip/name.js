const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.vip_db;

module.exports = {
	name: 'name',
	description: "change your special role name.",
	aliases: [],
	cooldown: 0,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {


        // const channel = interaction.guild.channels.cache.get(config.logout);
        if(message.channel.id == "1197381792034988244" && message.member.roles.cache.has("1080977761549684788")) {
            if(await db.has(`${message.member.id}`)) {
                const role = message.guild.roles.cache.get(( await db.get(message.member.id)).role);
                const name = message.content.slice(5).trim();
                if(!name)return message.reply("الرجاء اضافة اسم الرتبة")
        //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
        role.edit({
            name: name
    
        }).then(() =>{
        return message.reply("تم تعديل اسم رتبتك بنجاح")

        }).catch(err => {
            return message.reply("حصل خطأء اثناء تعديل اسم الرتبة الرجاء المحاولة مره اخرى")
        })

            }else {
            
                return message.reply("انت لا تمتلك رتبه خاصة")
                

        }
            
        }

	}
};