const roblox = require('noblox.js');
require('dotenv').config();

exports.run = async (client, message, args) => {
    let cookie = process.env.cookie;
    try {
        await roblox.setCookie(cookie);
    } catch {
        return message.channel.send("The cookie is invalid!");
    }
    return message.channel.send("The cookie is valid!");
}
