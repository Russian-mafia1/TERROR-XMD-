import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === "ping") {
    const start = new Date().getTime();
    await m.React('⚡');

    // Send a message and measure the response time
    const messageSentTime = new Date().getTime();
    await sock.sendMessage(m.from, { text: '*Checking ping...*' }, { quoted: m });
    const end = new Date().getTime();
    const pingTime = (end - messageSentTime) / 1000;

    // Message final stylisé
    const result = `
╭──〔 *TERROR-XMD-* 〕─╮
│  
│  ✦ Response Time: *${pingTime.toFixed(3)}s*
│  ✦ Server: ✅ Online
│  ✦ Version: ⚙️ *V2 Fast Mode*
│  
╰───────────────────╯`;

    await sock.sendMessage(m.from, {
      text: result,
      contextInfo: {
        externalAdReply: {
          title: 'TERROR-XMD-',
          mediaType: 1,
          previewType: 0,
          renderLargerThumbnail: true,
          thumbnailUrl: 'https://files.catbox.moe/zpjh78.jpg', 
          sourceUrl: 'https://github.com/Russian-mafia1/TERROR-XMD-'
        }
      }
    }, { quoted: m });
  }
};

export default ping;
