const axios = require(`axios`);
const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `youtube together`,
  category: `🎶 Music`,
  aliases: [`ytt`, `youtube`, `yt`],
  description: `Inicia o Youtube Together`,
  usage: `resume`,
  parameters: {
    "type": "music",
    "activeplayer": false,
    "previoussong": false
  },
  type: "song",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    /*if(!message.member.voice.channel) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(client.la[ls].common.join_vc)
        ]
      });
    if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
              return message.reply({
                embeds: [new MessageEmbed()
                  .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
                  .setFooter(client.getFooter(es))
                  .setTitle("Use esse link para iniciar uma sessão do YouTube Together:\n" + `${invite.code}`)
                ]
              });
            });
    }*/
    
    const tokenOTT = await axios.get('https://opentogethertube.com/api/auth/grant')
    const configOTT = {
      headers: { Authorization: `Bearer ${tokenOTT.data.token}` }
    };
    const bodyParametersOTT = {
      key: "value"
    };
    const responseOTT = await axios.post('https://opentogethertube.com/api/room/generate', bodyParametersOTT, configOTT)
    const roomOTTLink = `https://ottr.cc/${responseOTT.data.room}`

    await message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
        .setFooter(client.getFooter(es))
        .setTitle("Use esse link para iniciar uma sessão do OpenTogetherTube:\n" + `${roomOTTLink}`)
            ]
      });
      
  }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
