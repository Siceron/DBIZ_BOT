const {
    AudioPlayerStatus,
    createAudioPlayer,
    createAudioResource,
    createReadStream,
    joinVoiceChannel
} = require('@discordjs/voice');
const fs = require("fs")

module.exports = (message, track) => {
    var voiceChannel = message.member.voice.channel;

    const player = createAudioPlayer();
    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
    });
    connection.subscribe(player);

    const resource = createAudioResource(fs.createReadStream("./sounds/"+track+".mp3"));
    player.play(resource);
    player.pause();
    player.unpause();
    player.on(AudioPlayerStatus.Idle, () => {
        connection.destroy();
    });
}