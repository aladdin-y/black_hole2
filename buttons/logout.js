const client = require("../.")
const config = client.config;

module.exports = {
    id: 'logout',
    permissions: [],
    run: async (client, interaction) => {
        let date_ob = new Date();
        let currentTime = {
            hours: date_ob.getHours(),
            minutes: date_ob.getMinutes(),
            seconds: date_ob.getSeconds(),
        }
        
        let loginTime = client.admin_login.get(interaction.user.id);
        
        if (!loginTime) {
            return interaction.reply({ content: "انت مو مسجل دخولك", ephemeral: true })
        } else {
            let hoursDiff = currentTime.hours - loginTime.hours;
            let minutesDiff = currentTime.minutes - loginTime.minutes;
            let secondsDiff = currentTime.seconds - loginTime.seconds;

            // Handle negative differences
            if (secondsDiff < 0) {
                secondsDiff += 60;
                minutesDiff--;
            }
            if (minutesDiff < 0) {
                minutesDiff += 60;
                hoursDiff--;
            }
            if (hoursDiff < 0) {
                hoursDiff += 24;
            }
            client.admin_login.delete(interaction.user.id)
            const channel = interaction.guild.channels.cache.get(config.logout);

             interaction.reply({
                content: `تم تسجيل خروجك بنجاح`,
                ephemeral: true
            })
            return channel.send({
                content: `${interaction.user} لقد سجل دخولة لمدة ${hoursDiff} ساعة و ${minutesDiff} دقيقة و ${secondsDiff} ثانية.`,
                ephemeral: true
            })
        }
    }
};
