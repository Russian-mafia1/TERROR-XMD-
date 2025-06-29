import config from '../../config.cjs';
import fetch from 'node-fetch';

const repo = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "repo") {
    await m.React('🚀');
    const repoUrl = 'https://github.com/Russian-mafia1/TERROR-XMD-';
    const imageUrl = 'https://files.catbox.moe/zpjh78.jpg';

    try {
      const apiUrl = `https://api.github.com/repos/Russian-mafia1/TERROR-XMD-`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.forks_count !== undefined && data.stargazers_count !== undefined) {
        const menuText = `
⭓──────────────────⭓
 💎 *TERROR-XMD-* 💎
⭓──────────────────⭓

🌐 *Official GitHub:*
🔗 ${repoUrl}

📈 *Live Repo Stats:*
⭐ Stars: \`${data.stargazers_count}\`
🍴 Forks: \`${data.forks_count}\`

✨ *Features You’ll Love:*
⭓ Multi-Session Support
⭓ Auto QR Mode
⭓ Stylish UI + Animated CMDs
⭓ Easy to Deploy & Maintain

🎥 *Tutorial & Setup Guide:*
📺 *not available*

⭓──────────────────⭓
  BUILT BY HACKLINK TECH.INC
⭓──────────────────⭓
        `.trim();

        await sock.sendMessage(m.from, {
          image: { url: imageUrl },
          caption: menuText,
          contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: "HACKLINK TECH.INC",
              newsletterJid: "120363401087525436@newsletter",
            },
          },
        }, { quoted: m });

      } else {
        await sock.sendMessage(m.from, {
          text: '⚠️ GitHub repo data unavailable. Try again later.',
          quoted: m
        });
      }

    } catch (error) {
      console.error("Repo fetch error:", error);
      await sock.sendMessage(m.from, {
        text: '🚨 Failed to load repository information.',
        quoted: m
      });
    } finally {
      await m.React('✅');
    }
  }
};

export default repo;
