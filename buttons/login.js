const client = require("../.")
const config = client.config;

module.exports = {
	id: 'login',
	permissions: [],
	run: async (client, interaction) => {

let date_ob = new Date();


let login = client.admin_login.get(interaction.user.id);

if(!login) {
    const time = {
         hours: date_ob.getHours(),

// current minutes
 minutes: date_ob.getMinutes(),

// current seconds
 seconds:date_ob.getSeconds(),
    }
    client.admin_login.set(interaction.user.id, time)
return interaction.reply({content: "تم تسجيل دخولك بنجاح", ephemeral: true})


}else {
return interaction.reply({content: "انت مسجل دخولك بالفعل", ephemeral: true})
}


	}
};
