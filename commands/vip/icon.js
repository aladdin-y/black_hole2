const { Client, GatewayIntentBits, Partials, EmbedBuilder, Collection, ButtonBuilder, ActionRowBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.vip_db;

module.exports = {
    name: 'icon',
    description: "change your special role icon.",
    aliases: [],
    cooldown: 0,
    userPerms: [],
    botPerms: [],
    run: async (client, message, args) => {

        // const channel = interaction.guild.channels.cache.get(config.logout);
        if (message.channel.id == "1197381792034988244" && message.member.roles.cache.has("1080977761549684788")) {
            if (await db.has(`${message.member.id}`)) {
                const role = message.guild.roles.cache.get((await db.get(message.member.id)).role);
                let icon = '';
                // Check if the message has attachments
                if (message.attachments.size > 0) {
                    icon = message.attachments.first().url;
                }
                // Check if the message contains a server emoji
                else if (message.content.match(/<a?:\w+:\d+>/)) {
                    icon = message.content.match(/<a?:\w+:\d+>/)[0];
                    const emojiRegex = /<:[^:]+:(\d+)>|<a:[^:]+:(\d+)>/g;
                    const matches = icon.matchAll(emojiRegex);
                    for (const match of matches) {
                        icon = match[1] || match[2];
                    }
                    icon = `https://cdn.discordapp.com/emojis/${icon}.png?size=44&quality=lossless`
                }
                // Otherwise, consider the content as a direct URL
                else {
                    icon = args[0];
                }

                if (!icon) return message.reply("الرجاء إضافة اسم الرتبة أو رابط الصورة أو إيموجي الخادم");

                role.edit({
                    icon: icon
                }).then(() => {
                    return message.reply("تم تعديل الأيقونة الخاصة برتبتك بنجاح");
                }).catch(err => {
                    console.log(err)
                    return message.reply("حصل خطأ أثناء تعديل الأيقونة الرجاء المحاولة مرة أخرى");
                });

            } else {
                return message.reply("أنت لا تمتلك رتبة خاصة");
            }
        }
    }
};
