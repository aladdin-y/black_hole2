const client = require("../.")
const config = client.config;
const { EmbedBuilder } = require('discord.js');

module.exports = {
	id: 'Staff-Rules',
	permissions: [],
	run: async (client, interaction) => {


        // inside a command, event listener, etc.
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('قوانين الأداره')
            .setDescription(`
- يمنع التكبر بحجة انك صاحب رتبة 

- الاحترام واجب على الجميع بغض النظر عن علو رتبتك 

- مخالفتك للقوانين تعاقب عليها بضعف عقوبه الاعضاء العادية 

- يمنع التدخل بتكت تم استلامه من شخص اخر

- الاعتراض على رتبتك او ترقيتك ممنوعة, نظام الادارة يعمل بشكل جيد حتى لا يظلم اي احد 

- يمنع طلب الرتب او الترقيات او المكافآت 

- يمنع تسريب اي شي يخص الادارة

- يمنع طلب اجازة لاكثر من شهر 

- يمنع طلب اجازة في اول اسبوع لك بالاداره

- يمنع مخالفه اداري اخر, وان لزم مخالفته تتواصل مع احد العليا للتصرف 

- يمنع التدخل في امور الادارة العليا 

# ملاحظه مهمة: كونك اداري في هذا السيرفر يعني بأن سمعة السيرفر تقع على عاتقك`)
            .setThumbnail(config.logo)
   
            .setTimestamp()
            .setFooter({ text: '🪐 BLack Hole', iconURL: config.logo});
        
        interaction.reply({ embeds: [exampleEmbed], ephemeral: true });

    }
};
