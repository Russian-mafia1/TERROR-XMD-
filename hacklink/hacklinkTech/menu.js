import config from '../../config.cjs';

const startTime = Date.now();

const formatRuntime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
};

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('🪆');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const now = Date.now();
    const runtime = formatRuntime(now - startTime);
    const mode = m.isGroup ? "public" : "private"; 
    const ownerName = config.OWNER_NAME || "HACKLINK TECH.INC";

    let profilePictureUrl = 'https://files.catbox.moe/m9ox7r.jpg'; 
    try {
      const pp = await sock.profilePictureUrl(m.sender, 'image');
      if (pp) {
        profilePictureUrl = pp;
      }
    } catch (error) {
      console.error("Failed to fetch profile picture:", error);
    }

    const menuText = `
╭───────────────⭓
│ ʙᴏᴛ : *ɪɴᴄᴏɴɴᴜ-xᴅ-v2*
│ ʀᴜɴᴛɪᴍᴇ : ${runtime}
│ ᴍᴏᴅᴇ : ${mode}
│ ᴘʀᴇғɪx : ${prefix}
│ ᴏᴡɴᴇʀ : ${ownerName}
│ ᴅᴇᴠ : *ɪɴᴄᴏɴɴᴜ ʙᴏʏ*
│ ᴠᴇʀ : *𝟸.𝟶.𝟶*
╰───────────────⭓
───────────────────
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙃𝘼𝘾𝙆𝙇𝙄𝙉𝙆 𝙏𝙀𝘾𝙃.𝙄𝙉𝘾
───────────────────
┏▣ ◈🔰*MAIN* 🔰◈
│➽ menu
│➽ bugmenu
│➽ speed
│➽ alive
│➽ sudo
│➽ dev
│➽ allvar
│➽ ping
│➽ owner
┗▣

┏▣ ◈🔰*OWNER* 🔰◈
│➽ join
│➽ autoread
│➽ pair
│➽ leave
│➽ autostatusview
│➽ autotyping
│➽ autoblock
│➽ autorecording
│➽ autosticker
│➽ antisticker
│➽ restart
│➽ block
│➽ unblock
│➽ anticall
│➽ antidelete
│➽ upload
│➽ vv
│➽ setstatusmsg
│➽ allcmds
│➽ calculater 
│➽ alwaysonline
│➽ delete
│➽ vv2
│➽ setprefix
│➽ setownername
│➽ Profile
│➽ repo
┗▣

┏▣ ◈🔰*AI* 🔰◈
│➽ ai
│➽ bug
│➽ Bot
│➽ report
│➽ gemini
│➽ chatbot
│➽ gpt
│➽ lydia
│➽ inconnu-ai
│➽ chatbot 
┗▣

┏▣ ◈🔰*CONVERTER* 🔰◈
│➽ attp
│➽ gimage
│➽ mp3
│➽ ss
│➽ fancy
│➽ url
│➽ url2
│➽ shorten
│➽ sticker
│➽ take
┗▣

┏▣ ◈🔰*SEARCH* 🔰◈
│➽ google
│➽ mediafire
│➽ quranvideo
│➽ quraimage
│➽ facebook
│➽ instagram
│➽ tiktok
│➽ lyrics
│➽ ytsearch
│➽ app
│➽ bing
│➽ ipstalk
│➽ imdb
│➽ pinterest
│➽ githubstalk
│➽ image
│➽ ringtone
│➽ playstore
│➽ shazam
│➽ play
┗▣

┏▣ ◈🔰*FUN* 🔰◈
│➽ getpp
│➽ avatar
│➽ wcg
│➽ joke
│➽ ttt
│➽ yesorno
│➽ connect4
│➽ rank
│➽ quizz
│➽ movie
│➽ flirt
│➽ givetext
│➽ roast
│➽ anime
│➽ profile
│➽ ebinary
│➽ fetch
│➽ qc
│➽ couple
│➽ poll
│➽ couple
│➽ emojimix
│➽ score
│➽ toqr
│➽ ebinary
│➽ tempmail
┗▣

┏▣ ◈🔰*GROUP* 🔰◈
│➽ kickall
│➽ remove
│➽ tagall
│➽ hidetag
│➽ forward
│➽ getall
│➽ group close
│➽ group open
│➽ add
│➽ vcf
│➽ left
│➽ promoteall
│➽ demoteall
│➽ setdescription
│➽ linkgc
│➽ antilink2
│➽ antilink
│➽ antisticker
│➽ antispam
│➽ create
│➽ setname
│➽ promote
│➽ demote
│➽ groupinfo
│➽ balance
│➽ warn
┗▣

┏▣ ◈🔰*HENTAI* 🔰◈
│➽ hneko
│➽ trap
│➽ hwaifu
│➽ hentai
┗▣

┏▣ ◈🔰*AUDIO FX* 🔰◈
│➽ earrape
│➽ deep
│➽ blown
│➽ bass
│➽ nightcore
│➽ fat
│➽ fast
│➽ robot
│➽ tupai
│➽ smooth
│➽ slow
│➽ reverse
┗▣

┏▣ ◈🔰*REACTION* 🔰◈
│➽ bonk
│➽ bully
│➽ yeet
│➽ slap
│➽ nom
│➽ poke
│➽ awoo
│➽ wave
│➽ smile
│➽ dance
│➽ smug
│➽ blush
│➽ cringe
│➽ sad
│➽ happy
│➽ shinobu
│➽ cuddle
│➽ glomp
│➽ handhold
│➽ highfive
│➽ yeet
│➽ kick
│➽ kill
│➽ kiss
│➽ cry
│➽ bite
│➽ lick
│➽ pat
│➽ hug
┗▣
───────────────────⭓
⚡ 𝗛𝗔𝗖𝗞𝗟𝗜𝗡𝗞 𝗧𝗘𝗖𝗛.𝗜𝗡𝗖 ⚡
───────────────────⭓
`;

    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText.trim(),
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "HACKLINK TECH.INC",
          newsletterJid: "120363401087525436@newsletter",
        },
      }
    }, { quoted: m });
  }
};

export default menu;
