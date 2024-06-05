const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.vip_db;

module.exports = {
	name: 'color',
	description: "change your special role color.",
	aliases: [],
	cooldown: 0,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {


        // const channel = interaction.guild.channels.cache.get(config.logout);
        if(message.channel.id == "1197381792034988244" && message.member.roles.cache.has("1080977761549684788")) {
            if(await db.has(`${message.member.id}`)) {
                const role =message.guild.roles.cache.get(( await db.get(message.member.id)).role);
                const color = message.content.split("#");
                    if(!color[1]) return message.reply("الرجاء اضافة لون صالح");
        //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
        role.edit({
            color: `#${color[1]}`
    
        }).then(() =>{
        return message.reply("تم تعديل لون رتبتك بنجاح")

        }).catch(err => {
            return message.reply("حصل خطأء اثناء تعديل الون الرجاء المحاولة مره اخرى")
        })

            }else {
            
                return message.reply("انت لا تمتلك رتبه خاصة")
                

        }
            
        }

	}
};