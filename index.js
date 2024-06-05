const { Client, GatewayIntentBits, Partials, Collection ,EmbedBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle,  StringSelectMenuBuilder, StringSelectMenuOptionBuilder,Events, Emoji} = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
  shards: "auto",
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
  ],
});

const config = require('./config.json');
const fs = require("fs")
client.commands = new Collection()
client.aliases = new Collection()
client.folder = new Collection()
client.admin_login = new Collection()
client.buttons = new Collection()
client.config = config;
client.prefix = config.prefix;
const { QuickDB } = require("quick.db");
client.words_db = new QuickDB({ filePath: "db/words.sqlite" });
client.vip_db = new QuickDB({ filePath: "db/vip_db.sqlite" });
client.auto_line = new QuickDB({ filePath: "db/auto_line.sqlite" });
client.suggest = new QuickDB({ filePath: "db/suggest.sqlite" });


var { inviteTracker } = require("discord-inviter"), tracker = new inviteTracker(client);
  tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
      

	client.channels.cache.get('1220874893508345877').send({content:`${member} <a:BH_zStars:1123330800054718585> Welcome to Black Hole community<a:BH_zStars:1123330800054718585>` })

  });   


  client.on("channelCreate", async (channel) => {
    const name = channel.name;
    if(name.split("-")[0] == "ticket") {

    const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setDescription('لأستلام التكت الرجاء الضغط على الزر في الأسفل')

    .setTimestamp();

  const claim = new ButtonBuilder()
    .setCustomId('claim')
    .setLabel('استلام التذكره')
    .setEmoji('<a:Yakitori_Up:1048327138484437052>')
    .setStyle(ButtonStyle.Primary);

  const row = new ActionRowBuilder()
    .addComponents(claim);
  let msgId;
  setTimeout(() => {
 channel.send({ embeds: [exampleEmbed], components: [row] })

  },1000)
    }
  });



  client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const db = client.suggest;

    if(await db.has(message.channel.id)){

      message.delete();

      const embed = new EmbedBuilder()
      .setAuthor({ name: message.member.user.username, iconURL:message.member.user.displayAvatarURL({ dynamic: true, size: 1024 }) })
      .setDescription(`> ${message.content}`)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setTimestamp()
      .setFooter({ text: "Black Hole", iconURL: `https://cdn.discordapp.com/banners/1080952839934844950/a_4c8485d94057d6d5b1653181b22c7420.gif?size=240` });
    



      const reply = new ButtonBuilder()
			.setCustomId('reply')
      .setLabel("reply")
      .setEmoji("1130505451671404574")
      .setStyle(ButtonStyle.Secondary);

 const yes = new ButtonBuilder()
			.setCustomId('yes')
      .setLabel("0")
      .setEmoji("1160530533793660958")
      .setStyle(ButtonStyle.Success);

		const no = new ButtonBuilder()
			.setCustomId('no')
      .setLabel("0")
      .setEmoji("1160530519805677618")
			.setStyle(ButtonStyle.Danger);

		const row = new ActionRowBuilder()
			.addComponents(reply,yes, no);





      message.channel.send({embeds: [embed], content: `${message.member}`, components: [row],}).then(async msg => {
        await db.set(msg.id, { status: true,msg: message.content, yes: [] , no: [] })

      });

    }

  });


  client.on('messageCreate', async message => {
    if (message.author.bot) return;
    
    const db = client.auto_line;

    if(await db.has(message.channel.id)){
      message.channel.send((await db.get("link")).link);
    }


    if (message.content === "!help") {
      const commandFolders = fs.readdirSync('./commands/');
      const embeds = [];
  
      commandFolders.forEach(dir => {
          const files = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
          if (!files || files.length <= 0) console.log(chalk.red("Commands - 0"));
          
          const embed = new EmbedBuilder().setColor("Random");
          embed.setTitle(dir)
          files.forEach((file) => {
              let command = require(`./commands/${dir}/${file}`);
              if (command) {
                  embed.addFields({ name: command.name, value: `\`\`\`${command.description}\`\`\``, inline: true });
              }
          });
  
          embeds.push(embed);
      });
  
      message.reply({ embeds: embeds });
  }
  



    
  });








 




  
  const prefix = "+";
  const fields = true; // اذا بدك يحط معلومات الرتب في الأمبد خلها [true]
  const buttons = false; // اذا بدك تستعمل ازرار تقدر بس تسوي 5 رتب لو تبيها سلكت منيو بتقدر 25 رتبه
  const roles = [ 
    { name: "Sun", emoji: "1196454652326195290", description: "", roleID: "1189900776093515938",},
    { name: "Bee", emoji: "1196454660605755473", description: "", roleID: "1105227310707249214",},
    { name: "Black Hole", emoji: "1196453091613081601", description: "", roleID: "1105227477103685653",},
    { name: "Orange", emoji: "1196452721771937792", description: "", roleID: "1095365856223035442",},
    { name: "Wolf", emoji: "1196452477080445070", description: "", roleID: "1105231079121616927",},
    { name: "Cookies", emoji: "1196452805783855225", description: "", roleID: "1118895373914738738",},
    { name: "Phoenix", emoji: "1196454665525665792", description: "", roleID: "1105227478215184506",},
    { name: "Volcano", emoji: "1196454670403641434", description: "", roleID: "1142863885959966760",},
    { name: "Lime", emoji: "1196449730113306725", description: "", roleID: "1141412192978214933",},
    { name: "Clover", emoji: "1196449725151445052", description: "", roleID: "1105227479590916186",},
    { name: "Ice", emoji: "1196453020922282096", description: "", roleID: "1105227316390527006",},
    { name: "Neptune", emoji: "1196451819749134406", description: "", roleID: "1105227480731746386",},
    { name: "Blue berry", emoji: "1196449720667734137", description: "", roleID: "1136939527563399170",},
    { name: "Grape", emoji: "1198478485438607451", description: "", roleID: "1105227317011284132",},
    { name: "Flower", emoji: "1196454656067522610", description: "", roleID: "1105227312074588261",},
  ];
  
  
  
  
  
  client.on('messageCreate', async message => {
    if(message.author.bot) return;
    if (message.content === prefix + "set-channel") {
      const reaction_role_embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle(message.guild.name)
      .setDescription('اضغط على الزر في الأسفل لأخذ الرتب');
    let reaction_role;
    const row = new ActionRowBuilder();
  if(buttons == false) {		
       reaction_role = new StringSelectMenuBuilder()
    .setCustomId('reaction_role')
    .setPlaceholder('اضغط هنا لأختيار رتبك!')
    .setMinValues(1)
    .setMaxValues(1);
  }
        roles.forEach(role =>{
          let emoji = "** **", description = "_ _";
          if(role.emoji != undefined && role.emoji != "") emoji = role.emoji;
      if(fields == true){
  
          if(role.description != undefined && role.description != "") description = role.description;
  
          reaction_role_embed.addFields({name: `${client.emojis.resolve(emoji)}${role.name}`, value: `<@&${role.roleID}>`,inline:false})
        }
  
  
        if(buttons == true){
           reaction_role = new ButtonBuilder()
            .setCustomId(role.name)
            .setLabel(role.name)
            .setStyle(ButtonStyle.Secondary);
  
            if(role.emoji != undefined && role.emoji != "") reaction_role.setEmoji(role.emoji);
  
  
            row.addComponents(reaction_role);
        }else {
  
    
          const reaction_role_menu = new StringSelectMenuOptionBuilder()
          .setLabel(role.name)
          .setDescription(description);
  
          if(role.emoji != undefined && role.emoji != "") reaction_role_menu.setEmoji(role.emoji);
  
          reaction_role_menu.setValue(role.name);
  
          reaction_role.addOptions(reaction_role_menu);
  
  
        }
  
  
        })
  
        if(buttons == false)row.addComponents(reaction_role);
        
        
      await message.channel.send({
        embeds: [reaction_role_embed],
        components: [row],
      });
  
      message.delete();
  
  
  
  
    }
  })
  
  
  
  
  client.on("interactionCreate", async interaction => {
  
    if(buttons == true && !interaction.isButton())return;
    if(buttons == false && !interaction.isStringSelectMenu())return;
    await interaction.deferReply({ ephemeral: true });
  
    if(buttons == true){
      roles.forEach(role => {
        if(interaction.customId == role.name){
          if(interaction.member.roles.cache.has(role.roleID)){
            interaction.member.roles.remove(role.roleID);
            interaction.followUp({content: `❌ Removed <@&${role.roleID}>`, ephemeral: true})
  
          }else{
            interaction.member.roles.add(role.roleID);
            interaction.followUp({content: `✔ Added <@&${role.roleID}>`, ephemeral: true})
  
          }
        }
  
      })
  
    }else {
      if(interaction.customId != "reaction_role")return;
      let reaction_role;
      const row = new ActionRowBuilder();
    if(buttons == false) {		
         reaction_role = new StringSelectMenuBuilder()
      .setCustomId('reaction_role')
      .setPlaceholder('اضغط هنا لأختيار رتبك!')
      .setMinValues(1)
      .setMaxValues(1);
    }
      interaction.values.forEach(value => {
  
            roles.forEach(role => {
              if(interaction.member.roles.cache.has(role.roleID)){
                interaction.member.roles.remove(role.roleID);
                interaction.followUp({content: `❌ Removed <@&${role.roleID}>`, ephemeral: true})
      
      
              }
        if(value == role.name){
          
            interaction.member.roles.add(role.roleID);
            interaction.followUp({content: `✔ Added <@&${role.roleID}>`, ephemeral: true})
  
          
        }
  
      })
      
  
      })
      roles.forEach(role => {
        let  description = "_ _";
  
        if(role.description != undefined && role.description != "") description = role.description;
  
      const reaction_role_menu = new StringSelectMenuOptionBuilder()
      .setLabel(role.name)
      .setDescription(description);
  
      if(role.emoji != undefined && role.emoji != "") reaction_role_menu.setEmoji(role.emoji);
  
      reaction_role_menu.setValue(role.name);
  
      reaction_role.addOptions(reaction_role_menu);
    })
  
    if(buttons == false)row.addComponents(reaction_role);
    await interaction.message.edit({
      components: [row],
    });
  
    }
  })
  


































module.exports = client;

fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});


client.login(config.token)


