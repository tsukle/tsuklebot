commandDB = require('../database/commandDB.js');

exports.run = function(message, args, client, config, owner){
    message.channel.startTyping();
    setTimeout(() => {
        commandDB.currentCommands((commands) => {
            let commandList = "";
            for(i in commands){
                commandList = `${commandList}\n!${commands[i]}`;
            }
            message.channel.send({embed: {
                color: 0xffff00,
                author: {
                name: "Current Commands!",
                icon_url: client.user.avatarURL
                },
                description: `${commandList}\n(${message.author})`,
                timestamp: new Date(),
                footer: {
                text: `Don't spam them!`
                }
            }});
        });
        message.channel.stopTyping();
    }, 1000);
}