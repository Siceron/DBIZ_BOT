require("ffmpeg")
const playSound = require("../commands/playSound")
const fs = require('fs');

module.exports = async message => {

    if (!message.guild) return;

    if (message.content.charAt(0) === "!") {
        var filename = message.content.substr(1);
        try {
            if (fs.existsSync(`./sounds/${filename}.mp3`)) {
                playSound(message, filename)
            } else if(message.content === "!dbiz") {
                var soundList = "Here is a list of the sounds, try one of those:\n\n";
                fs.readdirSync('./sounds/').forEach(file => {
                    soundList += "!" + file.substring(0, file.length - 4)+"\n";
                });
                message.channel.send(soundList)
            }
        } catch (err) {
            console.error(err);
        }
    }
}