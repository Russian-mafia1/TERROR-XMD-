import config from "../../config.cjs";
import { fetchCoupleDP } from "../../hacklink/tech.js";

const couplePP = async (m, gss) => {
  const prefix = config.PREFIX;
  const body = m.body.startsWith(prefix) ? m.body.slice(prefix.length) : "";
  const command = body.trim().split(" ")[0].toLowerCase();
  const validCmds = ["ppcauple", "couple", "cpp"];
  if (!validCmds.includes(command)) return;

  try {
    if (typeof m.React === "function") await m.React("❤️");

    const { male, female } = await fetchCoupleDP();
    const inconnuThumb = `https://files.catbox.moe/zpjh78.jpg`;

    const contextTemplate = {
      isForwarded: true,
      forwardingScore: 2025,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363401087525436@newsletter',
        newsletterName: "HACKLINK TECH.INC",
        serverMessageId: 99
      },
      externalAdReply: {
        title: "COUPLE DP GENERATOR",
        body: "MADE BY TERROR-XMD-",
        mediaType: 1,
        thumbnailUrl: inconnuThumb,
        sourceUrl: "https://whatsapp.com/channel/0029Vb6Gy5XDzgTBTarvMW1O",
        renderLargerThumbnail: true
      }
    };

    await gss.sendMessage(m.from, {
      image: { url: male },
      caption: `╭────[ 🧑 *FOR MALE* ]\n│  _MADE IN BY TERROR-XMD-_\n╰──────◆`,
      contextInfo: contextTemplate,
    }, { quoted: m });

    await gss.sendMessage(m.from, {
      image: { url: female },
      caption: `╭────[ 👩 *FOR FEMALE* ]\n│  _MADE IN BY TERROR-XMD-_\n╰──────◆`,
      contextInfo: contextTemplate,
    }, { quoted: m });

    if (typeof m.React === "function") await m.React("✅");

  } catch (err) {
    console.error("Couple PP command error:", err);
    if (typeof m.React === "function") await m.React("❌");
    await m.reply("❌ *Failed to fetch couple DP.*\nPlease try again later.");
  }
};

export default couplePP;
