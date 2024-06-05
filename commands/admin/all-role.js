const { EmbedBuilder } = require('discord.js');
const client = require('../..');
const config = client.config;

module.exports = {
    name: 'inrole',
    description: "get all members in specific role.",
    aliases: [],
    cooldown: 0,
    	userPerms: ["Administrator"],
    botPerms: [],
    run: async (client, message, args) => {
            const permission = message.member.permissions.has("MANAGE_ROLES");

            if (!permission)
                return message.reply(
                    { content: ":x: **You don't have permission to use this command**", ephemeral: true }
                ).catch((err) => {
                    console.log(`I couldn't reply to the message: ` + err.message);
                });

            let role = message.mentions.roles.first()?.id;
            if (!role) return message.reply("الرجاء منشن رتبة");

            let users = message.guild.members.cache.filter(member => !member.roles.cache.has(role.id));

            let list = [];
            users.forEach(user => {
                if(user.roles.cache.has(role)) {
                    list.push(`${user} `);

                }
            });

            let embed = new EmbedBuilder()
                .setDescription(`**${list}**`)
            
            message.reply(`${list}`).catch((err) => {
                console.log(`I couldn't reply to the message: ` + err.message);
            });
    }
};
