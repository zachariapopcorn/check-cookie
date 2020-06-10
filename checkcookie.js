const roblox = require('noblox.js');

exports.run = async (client, message, args) => {
    let cookie = client.config.cookie;
    try {
        await roblox.setCookie(cookie);
    } catch {
        return message.channel.send("The cookie is invalid!");
    }
    return message.channel.send("The cookie is valid!");
}
