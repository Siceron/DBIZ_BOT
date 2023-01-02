const ping = require("../commands/ping")
const sounds = require("../commands/sounds")

module.exports = (client, message) => {
    if (message.content === "ping") {
        return ping(message)
    }

    sounds(message)
}