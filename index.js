import _0x47a6fc from 'dotenv';
_0x47a6fc.config();
import { makeWASocket, fetchLatestBaileysVersion, DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import { Handler, Callupdate, GroupUpdate } from './hacklink/hacklinkdev/hacklinkv2.js';
import _0x18d022 from 'express';
import _0x21ddd0 from 'pino';
import _0x3b40d6 from 'fs';
import 'node-cache';
import _0x2d44e9 from 'path';
import _0x291dd from 'chalk';
import 'axios';
import _0x175656 from './config.cjs';
import _0x5ea2cf from './lib/autoreact.cjs';
import { fileURLToPath } from 'url';
import { File } from 'megajs';
const {
  emojis,
  doReact
} = _0x5ea2cf;
const app = _0x18d022();
let useQR = false;
let initialConnection = true;
const PORT = process.env.PORT || 0xbb8;
const MAIN_LOGGER = _0x21ddd0({
  'timestamp': () => ",\"time\":\"" + new Date().toJSON() + "\""
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";
const __filename = fileURLToPath(import.meta.url);
const __dirname = _0x2d44e9.dirname(__filename);
const sessionDir = _0x2d44e9.join(__dirname, "session");
const credsPath = _0x2d44e9.join(sessionDir, "creds.json");
if (!_0x3b40d6.existsSync(sessionDir)) {
  _0x3b40d6.mkdirSync(sessionDir, {
    'recursive': true
  });
}
async function downloadSessionData() {
  console.log("Debugging SESSION_ID:", _0x175656.SESSION_ID);
  if (!_0x175656.SESSION_ID) {
    console.error("❌ Please add your session to SESSION_ID env !!");
    return false;
  }
  const _0x1c7c1f = _0x175656.SESSION_ID.split("INCONNU~XD~")[0x1];
  if (!_0x1c7c1f || !_0x1c7c1f.includes('#')) {
    console.error("❌ Invalid SESSION_ID format! It must contain both file ID and decryption key.");
    return false;
  }
  const [_0x12037b, _0x4c7d84] = _0x1c7c1f.split('#');
  try {
    console.log("🔄 Downloading Session...");
    const _0x3b0eb3 = File.fromURL("https://mega.nz/file/" + _0x12037b + '#' + _0x4c7d84);
    const _0x4f50be = await new Promise((_0x5e755d, _0x89f558) => {
      _0x3b0eb3.download((_0x4e75a3, _0x5b3cd4) => {
        if (_0x4e75a3) {
          _0x89f558(_0x4e75a3);
        } else {
          _0x5e755d(_0x5b3cd4);
        }
      });
    });
    await _0x3b40d6.promises.writeFile(credsPath, _0x4f50be);
    console.log("🔒 Session Successfully Loaded !!");
    return true;
  } catch (_0x299d77) {
    console.error("❌ Failed to download session data:", _0x299d77);
    return false;
  }
}
async function start() {
  try {
    const {
      state: _0x47b924,
      saveCreds: _0x165d79
    } = await useMultiFileAuthState(sessionDir);
    const {
      version: _0x5323ad,
      isLatest: _0x445d95
    } = await fetchLatestBaileysVersion();
    console.log("🤖 TERROR-XMD- using WA v" + _0x5323ad.join('.') + ", isLatest: " + _0x445d95);
    const _0x1be734 = makeWASocket({
      'version': _0x5323ad,
      'logger': _0x21ddd0({
        'level': "silent"
      }),
      'printQRInTerminal': useQR,
      'browser': ['TERROR-XMD-', "safari", "3.3"],
      'auth': _0x47b924,
      'getMessage': async _0x35f7f0 => {
        if (store) {
          const _0x102aaa = await store.loadMessage(_0x35f7f0.remoteJid, _0x35f7f0.id);
          return _0x102aaa.message || undefined;
        }
        return {
          'conversation': "terror-xmd- whatsapp user bot"
        };
      }
    });
    _0x1be734.ev.on("connection.update", async _0x5c972e => {
      const {
        connection: _0x192682,
        lastDisconnect: _0x551bf6
      } = _0x5c972e;
      if (_0x192682 === "close") {
        if (_0x551bf6?.['error']?.["output"]?.["statusCode"] !== DisconnectReason.loggedOut) {
          start();
        }
      } else {
        if (_0x192682 === "open") {
          if (initialConnection) {
            console.log(_0x291dd.green("✅ TERROR-XMD- is now online!"));
            const _0x3c8889 = {
              'url': 'https://files.catbox.moe/m9ox7r.jpg'
            };
            _0x1be734.newsletterFollow("120363401087525436@newsletter");
            _0x1be734.newsletterFollow("120363401087525436@newsletter");
            await _0x1be734.sendMessage(_0x1be734.user.id, {
              'image': _0x3c8889,
              'caption': "\n╔═════════════════\n║ *✅ TERROR-XMD- CONNECTED*         \n╠═════════════════\n║ *⚡DEV HACKLINK TECH.INC*       \n╚═════════════════\n║ *⌛ CHANNEL: https://whatsapp.com/channel/0029Vb6Gy5XDzgTBTarvMW1O*       \n╚═════════════════\n",
              'contextInfo': {
                'isForwarded': true,
                'forwardingScore': 0x3e7,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363401087525436@newsletter",
                  'newsletterName': "HACKLINK TECH.INC",
                  'serverMessageId': -0x1
                },
                'externalAdReply': {
                  'title': "TERROR-XMD",
                  'body': "ᴘᴏᴡᴇʀᴇᴅ ʙʏ terror-xmd-",
                  'thumbnailUrl': "https://files.catbox.moe/m9ox7r.jpg",
                  'sourceUrl': "https://whatsapp.com/channel/0029Vb6Gy5XDzgTBTarvMW1O",
                  'mediaType': 0x1,
                  'renderLargerThumbnail': false
                }
              }
            });
            initialConnection = false;
          } else {
            console.log(_0x291dd.blue("♻️ Connection reestablished after restart."));
          }
        }
      }
    });
    _0x1be734.ev.on("creds.update", _0x165d79);
    _0x1be734.ev.on('messages.upsert', _0x263d98 => Handler(_0x263d98, _0x1be734, logger));
    _0x1be734.ev.on("call", _0x415b8b => Callupdate(_0x415b8b, _0x1be734));
    _0x1be734.ev.on("group-participants.update", _0x5731a3 => GroupUpdate(_0x1be734, _0x5731a3));
    if (_0x175656.MODE === 'public') {
      _0x1be734["public"] = true;
    } else if (_0x175656.MODE === "private") {
      _0x1be734["public"] = false;
    }
    _0x1be734.ev.on('messages.upsert', async _0x102646 => {
      try {
        const _0x12b090 = _0x102646.messages[0x0];
        if (!_0x12b090.key.fromMe && _0x175656.AUTO_REACT && _0x12b090.message) {
          const _0x1e3f29 = emojis[Math.floor(Math.random() * emojis.length)];
          await doReact(_0x1e3f29, _0x12b090, _0x1be734);
        }
      } catch (_0x12c1af) {
        console.error("Auto react error:", _0x12c1af);
      }
    });
  } catch (_0x58d4b7) {
    console.error("Critical Error:", _0x58d4b7);
    process.exit(0x1);
  }
}
async function init() {
  if (_0x3b40d6.existsSync(credsPath)) {
    console.log("🔒 Session file found, proceeding without QR.");
    await start();
  } else {
    const _0x256bab = await downloadSessionData();
    if (_0x256bab) {
      console.log("✅ Session downloaded, starting bot.");
      await start();
    } else {
      console.log("❌ No session found or invalid, printing QR.");
      useQR = true;
      await start();
    }
  }
}
init();
app.use(_0x18d022["static"](_0x2d44e9.join(__dirname, "mydata")));
app.get('/', (_0x325223, _0x3dc2be) => {
  _0x3dc2be.sendFile(_0x2d44e9.join(__dirname, "mydata", "index.html"));
});
app.listen(PORT, () => {
  console.log("🌐 Server running on port " + PORT);
});
