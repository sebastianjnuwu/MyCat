import colors from 'colors';

export default {
  name: 'ready',
  async exec(client) {
  
    console.log(colors.brightGreen('[Info]')+` ${client.user.tag} was started in ${client.guilds.cache.size} servers!`);
 
    console.log(colors.brightGreen('[Info]')+` having access to ${client.channels.cache.size} channels!`);
 
    console.log(colors.brightGreen('[Info]')+` containing ${client.users.cache.size} users!`);

  }
};