const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.vip_db;

module.exports = {
	name: 'create',
	description: "create special role.",
	aliases: [],
	cooldown: 0,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {


        // const channel = interaction.guild.channels.cache.get(config.logout);
        if(message.channel.id == "1197381792034988244" && message.member.roles.cache.has("1080977761549684788")) {
            if(await db.has(`${message.member.id}`)) {
                return message.reply("انت تمتلك رتبه خاصة بالفعل")
            }else {
            const name = message.content.slice(7).trim();
            if(!name)return message.reply("الرجاء اضافة اسم الرتبة")
            message.guild.roles.create({
                name: name,
                reason: 'vip role',
            })
            .then( (role) => {
                const positionToCompare = message.guild.roles.cache.get("1086988927916838912").position;
                role.setPosition(positionToCompare+4)
                    .then(async updatedRole => {

                        message.member.roles.add(role);
                        message.reply("تم عمل الرتبة الخاصه بك")
                        await db.set(message.member.id, { role: role.id });

                    })
                    .catch(error => {
                        console.error("حدث خطأ أثناء محاولة نقل الرتبة:", error);
                    });
            })
            .catch(console.error);
            

        }
            
        }

	}
};