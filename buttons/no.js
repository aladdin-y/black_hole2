const client = require("../.")
const db = client.suggest;
const { Client, GatewayIntentBits, Partials, Collection ,EmbedBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle,  StringSelectMenuBuilder, StringSelectMenuOptionBuilder,Events, Emoji} = require('discord.js');

module.exports = {
	id: 'no',
	permissions: [],
	run: async (client, interaction) => {
        if(await db.has(interaction.message.id)) {
            let msg = await db.get(`${interaction.message.id}`)
let temp = false;

for (const user of msg.yes) {
    if (user == interaction.member.id) {
        await db.pull(`${interaction.message.id}.yes`, interaction.member.id);
    }
}


for (const user of msg.no) {
    if (user == interaction.member.id) {
        await db.pull(`${interaction.message.id}.no`, interaction.member.id);
        temp = true
    }
}


if(temp == false){
    await db.push(`${interaction.message.id}.no`, `${interaction.member.id}`)
    
}

msg = await db.get(`${interaction.message.id}`)

            const reply = new ButtonBuilder()
			.setCustomId('reply')
      .setLabel("reply")
      .setEmoji("1130505451671404574")
      .setStyle(ButtonStyle.Secondary);

 const yes = new ButtonBuilder()
			.setCustomId('yes')
            .setLabel(`${msg.yes.length}`)
            .setEmoji("1160530533793660958")
      .setStyle(ButtonStyle.Success);

		const no = new ButtonBuilder()
			.setCustomId('no')
      .setLabel(`${msg.no.length}`)
      .setEmoji("1160530519805677618")
			.setStyle(ButtonStyle.Danger);

		const row = new ActionRowBuilder()
			.addComponents(reply,yes, no);


interaction.message.edit({components: [row]}).then(() => {
    interaction.reply({content: 'تم اضافة تصويتك بنجاح', ephemeral: true})
})
        }

    }
};
