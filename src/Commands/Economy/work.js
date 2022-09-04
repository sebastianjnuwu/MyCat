export default {
  name: 'work',
  aliases: ['work'],
  ownerOnly: false,
  async exec({ client, message, t }) {
  
    function ms(ms) {
      const seconds = ~~(ms/1000);
      const minutes = ~~(seconds/60);
      const hours = ~~(minutes/60);
      const days = ~~(hours/24);
      return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 };
    }

    const player = message.author;
  
    const db = await client.db.user.findOne({ _id: player.id });

    if (Date.now() < db.cooldowns.work) {
     
      const calc = db.cooldowns.work - Date.now();
      
      return message.reply(`${t('commands:Work.time',{
        minutos: String(ms(calc).minutes),
        segundos: String(ms(calc).seconds)
      })}`);
    }
 
    const kerein = Math.floor(Math.random() * 123) * 7;
 
    let frase = [
      `${t('commands:', { won: String(kerein) })}`,
      `${t('commands:comerciante', { won: String(kerein) })}`,
      `${t('commands:medico', { won: String(kerein) })}`,
      `${t('commands:Work.presidente', { won: String(kerein) })}`,
      `${t('commands:Work.eletricista', { won: String(kerein) })}`,
      `${t('commands:Work.programador', { won: String(kerein) })}`,
      `${t('commands:Work.advogado', { won: String(kerein) })}`,
      `${t('commands:Work.padeiro', { won: String(kerein) })}`
    ];
 
    let work = frase[Math.floor(Math.random() * frase.length)];
 
    await client.db.user.updateOne({  _id: player.id },
      { $set: {
        'economy.kerein': db.economy.kerein + kerein,
        'cooldowns.work': Date.now() + 300000
      }
      });
  
    message.reply(`${work}`);
  
  }
};