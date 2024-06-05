const client = require('..');
const db = client.words_db;
const config = client.config;
const { Client, GatewayIntentBits, Partials, Collection ,EmbedBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle,  StringSelectMenuBuilder, StringSelectMenuOptionBuilder,Events, Emoji} = require('discord.js');

try {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isModalSubmit()) return;

        try {

            if (interaction.customId === 'reply-modal') {
const db2 = client.suggest;
const replyy = interaction.fields.getTextInputValue('reply');


if(await db2.has(interaction.message.id)) {

    let msg = await db2.get(`${interaction.message.id}`)
            const reply = new ButtonBuilder()
			.setCustomId('reply')
      .setDisabled(true)
      .setLabel("reply")
      .setEmoji("1130505451671404574")
      .setStyle(ButtonStyle.Secondary);

 const yes = new ButtonBuilder()
			.setCustomId('yes')
            .setLabel(`${msg.yes.length}`)
            .setEmoji("1160530533793660958")	
            .setDisabled(true)
      .setStyle(ButtonStyle.Success);

		const no = new ButtonBuilder()
			.setCustomId('no')
      .setLabel(`${msg.no.length}`)
      .setDisabled(true)
      .setEmoji("1160530519805677618")
			.setStyle(ButtonStyle.Danger);

		const row = new ActionRowBuilder()
			.addComponents(reply,yes, no);
    const message = interaction.message;
            const embed = new EmbedBuilder()
            .setAuthor({ name: message.member.user.username, iconURL:message.member.user.displayAvatarURL({ dynamic: true, size: 1024 }) })
            .setDescription(`> ${msg.msg} 
            Admin Reply:
        \`\`\` ${replyy} \`\`\`
            `)
            .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setTimestamp()
            .setFooter({ text: "Black Hole", iconURL: `https://cdn.discordapp.com/banners/1080952839934844950/a_4c8485d94057d6d5b1653181b22c7420.gif?size=240` });
          
      
interaction.message.edit({embeds:[embed] ,components: [row]}).then(() => {
    interaction.reply({content: 'تم اضافة الرد الخاص بك', ephemeral: true})
})
            }
            }



            if (interaction.customId === 'add-word-modal') {
                const wordd = interaction.fields.getTextInputValue('word');
                const reply = interaction.fields.getTextInputValue('reply');

                const word = await db.get(wordd);

                if (!word) {
                    await db.set(wordd, { reply: reply });
                    return interaction.reply({ content: "تم اضافة الرد التلقائي بنجاح", ephemeral: true });
                } else {
                    return interaction.reply({ content: "هاذة الكلمة موجودة بالفعل", ephemeral: true });
                }
            } else if (interaction.customId === 'delete-word-modal') {
                const wordd = interaction.fields.getTextInputValue('word');

                const word = await db.get(wordd);
                if (!word) {
                    return interaction.reply({ content: "هاذة الكلمة غير موجودة", ephemeral: true });
                } else {
                    await db.delete(wordd);
                    return interaction.reply({ content: "تم ازالة الكلمة بنجاح", ephemeral: true });
                }
            }
        } catch (error) {
            console.error("Error in interactionCreate:", error);
            // يمكنك إضافة مزيد من المعالجة هنا إذا لزم الأمر
        }
    });

    client.on('messageCreate', async message => {
        if (message.author.bot) return;

        try {
            const words = await db.all();
            const content = message.content.toLowerCase();

            for (const storedWord of words) {
                if (typeof storedWord === 'object' && storedWord.value && typeof storedWord.value.reply === 'string' && content.includes(storedWord.id.toLowerCase())) {
                    message.reply(storedWord.value.reply);
                    break;
                }
            }

            if (message.content == ".") {
                message.reply(`اطلق اثبات وجود <a:BH_Emoji62:1112715799803727914>`);
            }
        } catch (error) {
            console.error("Error in messageCreate:", error);
            // يمكنك إضافة مزيد من المعالجة هنا إذا لزم الأمر
        }
    });
} catch (error) {
    console.error("Error:", error);
    // يمكنك إضافة مزيد من المعالجة هنا إذا لزم الأمر
}
