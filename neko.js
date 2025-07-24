require('./db/config')
let autoGetLayanan = false;
let intervalId;
let antilinkEnabled = false;

const { BufferJSON, WA_DEFAULT_EPHEMERAL, makeWASocket, useMultiFileAuthState, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("baileys-mod")
const fs = require('fs')
const pino = require('pino')
const pushname = m.pushName || "No Name"
let defaultMarkupPercentage = 0.01; 

const { firefox } = require('playwright');
const FormData = require('form-data');
const admin = require('firebase-admin');
const serviceAccount = require('./db/serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-project-id.firebaseio.com',
  });
}

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
const md5 = require('md5');
const isCreator = [nomerBot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const firestore = admin.firestore();
const path = require('path');
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const jsonFilePath = './db/custom_commands.json';
const botgroupFile = './db/botgroup.json';
const configPath = './db/groupConfig.json';
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateUniqueRefID, connect } = require('./lib/myfunc')
module.exports = client = async (client, m, chatUpdate, store, db_respon_list) => {
  try {
      console.log('🔍 NEKO.JS: Message received from', m.key?.remoteJid || 'unknown'); // Debug log
      const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefix = "."
    const hariini = moment.tz('Asia/Jakarta').locale('id').format('dddd,DD MMMM YYYY');
    const productData = './db/datadigi.json';
      const productData2 = './db/dataevilbee.json';
    const db = admin.firestore();
    const pathUser = './db/user_down.json'
    const afk = require('./lib/afk');
    const _afk = JSON.parse(fs.readFileSync('./db/afk.json'));
      const ms = require('parse-ms');
      const fetch = require('node-fetch');
      const { createCanvas, loadImage } = require("canvas");
      const { prepareWAMessageMedia } = require('baileys-mod');
      const moment2 = require('moment-timezone');
      const QRCode = require('qrcode');
    let localUserData = [];
if (fs.existsSync(pathUser)) {
  const rawData = fs.readFileSync(pathUser, 'utf8');
  localUserData = JSON.parse(rawData);
}
//  const isCmd = body.startsWith(prefix)
      const isCmd = (body || '').startsWith(prefix)

    const cleanBody = typeof body === 'string' ? body : ''
const command = cleanBody.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    //const args = body.trim().split(/ +/).slice(1)
    const args = (typeof body === 'string') ? body.trim().split(/ +/).slice(1) : [];
    const pushname = m.pushName || "No Name"
    const text = q = args.join(" ")
    
    // Debug logs
    console.log('📝 Message body:', body);
    console.log('⚡ Command detected:', command);
    console.log('👤 From:', pushname);
    
    const { type, quotedMsg, mentioned, now, fromMe } = m
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const from = mek.key.remoteJid
    const botNumber = await client.decodeJid(client.user.id)
    const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isGroup = m.key.remoteJid.endsWith('@g.us')
    const isAfkOn = afk.checkAfkUser(m.sender, _afk)
    const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm z')
    const harisekarang = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
    const time1 = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    if (time1 < "23:59:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "19:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "18:00:00") {
      var ucapanWaktu1 = 'Sore'
    }
    if (time1 < "15:00:00") {
      var ucapanWaktu1 = 'Siang'
    }
    if (time1 < "10:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "05:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "03:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    const poster = fs.readFileSync('./lib/poster.jpg')
    const content = JSON.stringify(m.message)
   
    const fdocc = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
 
      message: {
        documentMessage: {
          title: `*Selamat ${ucapanWaktu1} ${pushname}*`,
          jpegThumbnail: m,
        }
      }
    }
    
   
function wrapText(text, maxLineLength) {
  const lines = [];
  while (text.length > maxLineLength) {
    let spaceIndex = text.lastIndexOf(" ", maxLineLength);
    if (spaceIndex === -1) {
      spaceIndex = maxLineLength; // Jika tidak ada spasi, potong pada batas maksimum
    }
    lines.push(text.substring(0, spaceIndex));
    text = text.substring(spaceIndex).trim(); // Hilangkan spasi yang tidak perlu
  }
  lines.push(text); // Tambahkan sisa teks
  return lines;
}
      function loadGroupConfig() {
  try {
    if (!fs.existsSync(configPath)) return {};
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch (e) {
    console.error('âŒ Gagal load config grup:', e);
    return {};
  }
}

function saveGroupConfig(config) {
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  } catch (e) {
    console.error('âŒ Gagal simpan config grup:', e);
  }
}

function saveGroupConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

    
     async function downloadAndSaveMediaMessage (type_file, path_file) {
        	if (type_file === 'image') {
                var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	}
        }

    // Helper function untuk download dan prepare media gambar
    async function downloadAndPrepareImage(imageUrls) {
        for (let i = 0; i < imageUrls.length; i++) {
            try {
                console.log(`🔄 Mencoba download gambar dari: ${imageUrls[i]}`);
                
                // Download gambar menggunakan fungsi getBuffer yang sudah ada
                const imageBuffer = await getBuffer(imageUrls[i]);
                
                if (imageBuffer && !imageBuffer.message && Buffer.isBuffer(imageBuffer)) {
                    // Prepare media menggunakan baileys-mod
                    const preparedMedia = await prepareWAMessageMedia({ image: imageBuffer }, { upload: client.waUploadToServer });
                    console.log(`✅ Berhasil memuat gambar dari: ${imageUrls[i]}`);
                    return { success: true, media: preparedMedia.image, url: imageUrls[i] };
                }
            } catch (error) {
                console.log(`❌ Gagal memuat gambar dari ${imageUrls[i]}:`, error.message);
                continue;
            }
        }
        return { success: false, media: null, url: null };
    }
      
    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, '')
      const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:' + name + '\n' +
        'ORG:;\n' +
        'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' +
        'END:VCARD'
      return client.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions: mn ? mn : [] }, { quoted: quoted })
    }
    const owned = `${global.nomerOwner}@s.whatsapp.net`
    const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
    const kiw = sender.split("@")[0]
    const isUser = pathUser.includes(m.kiw)
   const mentionByTag = (m && m.mtype === "extendedTextMessage" && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid) ? m.message.extendedTextMessage.contextInfo.mentionedJid : [];

const Input = Array.isArray(mentionByTag) && mentionByTag.length > 0 ? mentionByTag[0] : (q ? numberQuery : false);


    if (!client.public) {
      if (!m.key.fromMe) return
    }
    if (m.message) {
      console.log(chalk.red(chalk.bgBlack('[ PESAN ] => ')), chalk.white(chalk.bgBlack(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender.split("@")[0]) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat'), chalk.magenta(`\nJam :`) + time1)
    }

      function getOrderFormat(aliasKey) {
  if (!aliasKey) return '[KODE] [TUJUAN]';

  const key = aliasKey.toLowerCase();
  const info = aliasMap[key];
  if (!info) return '[KODE] [TUJUAN]';

  const brand = info.brand.toUpperCase();
  const category = info.category.toLowerCase();

  if (brand.includes('MOBILE LEGENDS')) {
    return '[KODE] [ID] [SERVER]';
  } else if (['pulsa', 'e-money', 'pln', 'masa aktif', 'paket sms & telpon'].includes(category)) {
    return '[KODE] [NOHP]';
  } else {
    return '[KODE] [ID]'; // Default format untuk game umum
  }
}

      /*
function getContoh(aliasKey) {
  const format = getOrderFormat(aliasKey);
  // Contoh dinamis
  if (format === '[KODE] [ID] [SERVER]') return 'QR ML5 972066397 12864';
  if (format === '[KODE] [ID]') return 'QR FF10 123456789';
  if (format === '[KODE] [NOHP]') return 'QR PTL5 085123456789';
  return '`QR KODE TUJUAN`'; // fallback default
}
*/

    function readCustomCommands() {
      try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        return {};
      }
    }
      
      function generateSignature(key, unique_code, service, amount, valid_time) {
    return md5(key + unique_code + service + amount + valid_time + 'NewTransaction');
}
    function saveCustomCommands(commands) {
      fs.writeFileSync(jsonFilePath, JSON.stringify(commands, null, 2), 'utf8');
    }

    function addCustomCommand(groupID, command, response) {
      const customCommands = readCustomCommands();
      if (!customCommands[groupID]) {
        customCommands[groupID] = {};
      }
      customCommands[groupID][command] = response;
      saveCustomCommands(customCommands);
    }
      // Antilink
const isAntiLink = isGroup ? antilink.includes(from) : false
if (isGroup && isAntiLink && !isOwner && !isAdmins && isBotAdmins){
            if (chath.includes(`https://chat.whatsapp.com`)) {
                await client.sendMessage(from, { delete: m.key })
                m.reply(`ðŸ›¡ *GROUP LINK DETECTOR* ðŸ›¡\n\nBudayakan baca Deskribsi grup ka, mari saling menghargai sesama seller`)
                let number = sender
client.groupParticipantsUpdate(from, [number], "remove")
            }
    }   
    function handleCustomCommands(groupID, command, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const customResponse = customCommands[groupID][command.toUpperCase()];
        if (customResponse) {
          m.reply(customResponse);
        }
      }
    }

   if (isGroup && !isCmd) {
  const groupID = from;
  const customCommand = (body || '').trim().toLowerCase();
  handleCustomCommands(groupID, customCommand, m.reply);
}

//fungsi custom edit message
function sendOrEditMessage(msg, text, initialMsgKey = null) {
  if (initialMsgKey && global.sock && typeof global.sock.editMessage === 'function') {
    return global.sock.editMessage(initialMsgKey.remoteJid, initialMsgKey, { text });
  } else {
    return msg.reply(text);
  }
}      
// Fungsi utilitas untuk membaca database
function readDatabase() {
    try {
        const rawData = fs.readFileSync('database.json', 'utf8');
        return JSON.parse(rawData);
    } catch (err) {
        console.error("Error reading database:", err.message);
        return { issuerRefs: [] }; // Return default jika file tidak ada atau error
    }
}

// Fungsi utilitas untuk menyimpan database
function saveDatabase(db) {
    try {
        fs.writeFileSync('database.json', JSON.stringify(db, null, 2), 'utf8');
    } catch (err) {
        console.error("Error saving database:", err.message);
    }
}
    function listCustomCommands(groupID, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const commands = Object.keys(customCommands[groupID]);
        if (commands.length > 0) {
          let responseText =
            `Ꮺ ָ࣪ ۰ 𝗁𝖾𝗅𝗅𝗈 𝖽𝖾𝖺𝗋 *${pushname}* ‹！𝗐𝖾𝗅𝖼𝗈𝗆𝖾 𖦆 𝗍𝗁𝗂𝗌 𝗂𝗌 𝗐𝗁𝖺𝗍 𝗐𝖾 𝗍𝗁𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 ┈─ ꒱ 𝆬

᪤ ٠ 𝖽𝖺𝗍𝖾 ⦂ ${harisekarang}
᪤ ٠ 𝗍𝗂𝗆𝖾 ⦂ ${time}

╭───┈ \`𝖼𝖺𝗍𝖺𝗅𝗈𝗀𝗎𝖾\` 𝗈𝗇 𝗍𝗁𝖾 𝖻𝖾𝗅𝗈𝗐\n`;

          commands.forEach((command, index) => {

            responseText += `𑣿 ꒰ 🥧 ${command}\n`;

          });
                   responseText += `╰──━

*${namaStore}*
ⓘ 𝗺𝗶𝗻𝗶 𝗻𝗼𝘁𝗲 ⦂
⊹ 𝗄𝖾𝗍𝗂𝗄 𝗅𝗂𝗌𝗍 𝖽𝗂𝖺𝗍𝖺𝗌 𝗎𝗇𝗍𝗎𝗄 𝗆𝖾𝗅𝗂𝗁𝖺𝗍 𝗉𝗋𝗈𝖽𝗎𝗄`
          m.reply(responseText)
        } else {
          m.reply("Custom Command belum ditambah di group ini");
        }
      } else {
        m.reply("Custom Command belum ditambah di group ini");
      }
    }

//FITUR AFK
if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
    if (afk.checkAfkUser(ment, _afk)) {
    let getId2 = afk.getAfkId(ment, _afk)
    let getReason2 = afk.getAfkReason(getId2, _afk)
    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
    let heheh2 = ms(getTimee)
    m.reply(`Jangan tag dia bang, orangnya lagi afk.\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
    }
    }
	if (afk.checkAfkUser(m.sender, _afk)) {
    let getId = afk.getAfkId(m.sender, _afk)
    let getReason = afk.getAfkReason(getId, _afk)
    let getTime = Date.now() - afk.getAfkTime(getId, _afk)
    let heheh = ms(getTime)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./db/afk.json', JSON.stringify(_afk))
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
    }
}    
      
/*      // Middleware: Blok command kalau bukan dari grup, kecuali owner
if (!m.isGroup && !global.owner.includes(m.sender.split("@")[0])) {
  return; // Langsung stop, tanpa balasan apapun
}*/
      // middleware semua command di private chat, kecuali admin/owner
      if (!m.isGroup && ! global.owner.includes(m.sender.split("@")[0])) {
          return;
      }
      //  Middleware untuk blokir command berdasarkan config grup
const groupConfigs = loadGroupConfig();
if (m.isGroup && groupConfigs[m.chat] && groupConfigs[m.chat].lockedCommands?.includes(command.toLowerCase())) {
  return ;
    //m.reply(`‼️ Command *${command}* sedang dinonaktifkan di grup ini.\n_Silahkan hubungi *Owner* untuk meminta group khusus Topup Otomatis_`);
}
      m.body = m.body || ''
      
    switch (command) {
  		
            case 'setcmd': {
  if (!m.isGroup) return m.reply('‼️ Hanya bisa digunakan dalam grup.');
  if (!isAdmins) return m.reply('‼️ Hanya admin grup yang bisa mengatur command.');

  const [cmdName, status] = args;
  if (!cmdName || !status) return m.reply('Format: *setcmd [namaCommand] [on/off]*');

  const groupConfigs = loadGroupConfig();
  const groupSetting = groupConfigs[m.chat] || { lockedCommands: [], allowedCommands: [] };

  const cmd = cmdName.toLowerCase();
  const mode = status.toLowerCase();

  if (mode === 'off') {
    if (!groupSetting.lockedCommands.includes(cmd)) {
      groupSetting.lockedCommands.push(cmd);
    }
    groupSetting.allowedCommands = groupSetting.allowedCommands.filter(c => c !== cmd);
  } else if (mode === 'on') {
    if (!groupSetting.allowedCommands.includes(cmd)) {
      groupSetting.allowedCommands.push(cmd);
    }
    groupSetting.lockedCommands = groupSetting.lockedCommands.filter(c => c !== cmd);
  } else {
    return m.reply('‼️ Status hanya bisa "on" atau "off".');
  }

  groupConfigs[m.chat] = groupSetting;
  saveGroupConfig(groupConfigs);

  return m.reply(`✅ Command *${cmd}* telah di *${mode.toUpperCase()}* kan untuk grup ini.`);
}

            case 'listcmd': {
  const groupConfigs = loadGroupConfig();
  const groupSetting = groupConfigs[m.chat] || {};
  const locked = groupSetting.lockedCommands || [];
  const allowed = groupSetting.allowedCommands || [];

  return m.reply(
    `📝 *Status Command Grup*\n\n` +
    `🔒 *Terkunci* : ${locked.length ? locked.join(', ') : 'Tidak ada'}\n`
      
  );
}


     case 'help': {

  return m.reply(
`╭─ ꒰  *${namaStore}*  ꒱ ─ ʚɞ⸼─╮ 

ⓘ 𝖻𝖾𝗋𝗂𝗄𝗎𝗍 𝖿𝗂𝗍𝗎𝗋 𝗒𝖺𝗇𝗀 𝗍𝖾𝗋𝗌𝖾𝖽𝗂𝖺 𝖽𝗂 𝖻𝗈𝗍 𝗂𝗇𝗂,
𝗌𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝗁𝗎𝖻𝗎𝗇𝗀𝗂 𝗈𝗐𝗇𝖾𝗋 𝗃𝗂𝗄𝖺 𝖺𝖽𝖺 𝗄𝖾𝗇𝖽𝖺𝗅𝖺!

─── • ┈ ┈ ୨♡୧  ┈ ┈ • ───

ꕮ ࣪ ׅ  *Bot Name* : ${global.botName}
ꕮ ࣪ ׅ  *Owner Name* : ATLAN

╭─ ꒰ *menu utama* ꒱ ─ ʚɞ⸼─╮ 
│☍ ࣪ ׅ  *list*
│☍ ࣪ ׅ  *owner*
│☍ ࣪ ׅ  *cekml*
│☍ ࣪ ׅ  *mlid*
│☍ ࣪ ׅ  *cekff*
│☍ ࣪ ׅ  *cekpln*
╰── ʚɞ  ⸼────────────╯

╭─ ꒰ *menu owner* ꒱ ─ ʚɞ⸼─╮ 
│☍ ࣪ ׅ  *addsewa*
│☍ ࣪ ׅ  *setcmd*
│☍ ࣪ ׅ  *join*
╰── ʚɞ  ⸼────────────╯

╭─ ꒰ *menu group* ꒱ ─ ʚɞ⸼─╮ 
│☍ ࣪ ׅ  *addlist*
│☍ ࣪ ׅ  *updatelist*
│☍ ࣪ ׅ  *renamelist*
│☍ ࣪ ׅ  *dellist*
│☍ ࣪ ׅ  *proses*
│☍ ࣪ ׅ  *done*
│☍ ࣪ ׅ  *linkgc*
│☍ ࣪ ׅ  *hidetag*
│☍ ࣪ ׅ  *open*
│☍ ࣪ ׅ  *close*
│☍ ࣪ ׅ  *join*
│☍ ࣪ ׅ  *kick*
│☍ ࣪ ׅ  *antilink*
╰── ʚɞ  ⸼────────────╯`);
}
           
       
			case "mlreg": 
case "mlid":
case "idml":
case "regml": {
  const { format } = require("util");
  if (Array.from(text).filter((x) => (x == "(" || x == ")")).length == 2) {
    if (isNaN(parseInt(text)) || !isNaN(parseInt(text)) && (format(parseInt(text)).length < 6 || format(parseInt(text)).length > 10)) {
      return m.reply("Invalid users id");
    } else if (!text.includes("(") && !text.includes(")") || text.includes("(") && text.includes(")") && !isNaN(parseInt(text.split("(")[1])) && (format(parseInt(text.split("(")[1])).length < 4 || format(parseInt(text.split("(")[1])).length > 5)) {
      return m.reply("Invalid servers id");
    }
    var userId = format(parseInt(text)).trim();
    var serverId = format(parseInt(text.split("(")[1])).trim();
  } else if (text.split(" ").filter((x) => (x !== "" && !isNaN(parseInt(x)))).length == 2) {
    const getdata = text.split(" ").filter((x) => (x !== "" && !isNaN(parseInt(x)))).map((x) => x.trim());
    if (getdata[0].length < 6 || getdata[0].length > 10) {
      return m.reply("Invalid users id");
    } else if (getdata[1].length < 4 || getdata[1].length > 5) {
      return m.reply("Invalid servers id");
    }
    var userId = format(parseInt(getdata[0])).trim();
    var serverId = format(parseInt(getdata[1])).trim();
  } else {
    return m.reply("Example not found!!");
  }

  // Kirim pesan awal dan simpen key
  const initialMsg = await m.reply('dih, kepo amat dah');
  const msgKey = initialMsg.key;

  const fetch = require("node-fetch");
  const url = `https://dev.luckycat.my.id/api/stalker/mobile-legend?users=${userId}&servers=${serverId}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    if (result.status && result.data) {
      const { nickname, country } = result.data;
      // Edit pesan awal dengan hasil
      await client.sendMessage(msgKey.remoteJid, {
        text: `Mobile Legends\n\n> *Nickname:* ${nickname}\n> *Country:* ${country}\n\n© AtlanticGate`,
        edit: msgKey
      });
    } else {
      // Edit pesan awal dengan error
      await client.sendMessage(msgKey.remoteJid, {
        text: "*_ID Salah_*",
        edit: msgKey
      });
    }
  } catch (error) {
    console.error('Error fetching API:', error.message);
    // Edit pesan awal dengan error
    await client.sendMessage(msgKey.remoteJid, {
      text: "*_ID Salah_*",
      edit: msgKey
    });
  }

  break;
}
            
            //latest update cekganda
            //case 'cekml':
        case 'cekganja':
case 'cekganda': {
  if (!q) return m.reply(`🔍CEK NICK MLBB & FIRST TOPUP\nContoh: cekganda 566055979 8250`);
  const [gameId, server] = text.split(' ');
  if (!gameId || !server) return m.reply('Game ID dan Server wajib di isi');

  // Kirim pesan awal dan simpen key
  const initialMsg = await m.reply('Sedang mengecek data akun MLBB...');
  const msgKey = initialMsg.key;

  // Queue sederhana di dalam case
  const queue = [];
  let isProcessing = false;

  const processQueue = async () => {
    if (isProcessing || queue.length === 0) return;
    isProcessing = true;
    const { msg, gameId, server, msgKey } = queue.shift();
    try {
      await handleCekganda(msg, gameId, server, msgKey);
    } catch (error) {
      console.error(`Error in queue: ${error.message}`);
      // Edit pesan awal dengan error
      await client.sendMessage(msgKey.remoteJid, {
        text: 'Proses gagal, coba lagi nanti. Server mungkin sibuk.',
        edit: msgKey
      }, { quoted: m });
    }
    isProcessing = false;
    processQueue();
  };

  const handleCekganda = async (msg, gameId, server, msgKey) => {
    const browser = await firefox.launch({ headless: true });
    const page = await browser.newPage();

    try {
      console.log(`Mengisi Game ID: ${gameId} dan Server: ${server}...`);
      await page.setExtraHTTPHeaders({ 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' });
      await page.goto('https://www.mobapay.com/mlbb/?r=ID', { waitUntil: 'domcontentloaded', timeout: 10000 });

      const gameIdInput = await page.waitForSelector('#userInput', { timeout: 10000 })
        .catch(() => console.log('Elemen #userInput nggak ditemukan.'));
      if (!gameIdInput) throw new Error('Elemen Game ID nggak ketemu');

      const serverInput = await page.waitForSelector('#serverInput', { timeout: 10000 })
        .catch(() => console.log('Elemen #serverInput nggak ditemukan.'));
      if (!serverInput) throw new Error('Elemen Server nggak ketemu');

      await page.fill('#userInput', gameId);
      await page.fill('#serverInput', server);

      await page.dispatchEvent('#userInput', 'blur');
      await page.dispatchEvent('#serverInput', 'blur');

      const firstItem = await page.waitForSelector('.tracker-recharge-item', { timeout: 10000 });
      if (firstItem) {
        await firstItem.click({ timeout: 5000 }).catch(async (e) => {
          console.log('Klik gagal, coba tutup modal:', e.message);
          const modal = await page.$('.mobapay-modal-body', { timeout: 5000 });
          if (modal) {
            const closeButton = await page.$('.mobapay-modal-close', { timeout: 5000 });
            if (closeButton) await closeButton.click({ timeout: 5000 });
          }
          await firstItem.click({ timeout: 5000 });
        });
      } else throw new Error('Elemen item top-up nggak ketemu');

      await page.waitForFunction(
        () => !document.querySelector('.mobapay-user-character-name')?.textContent.includes('Display after verification'),
        { timeout: 30000, polling: 500 }
      ).catch(() => console.log('Verifikasi belum selesai dalam 30 detik.'));

      await page.waitForTimeout(3000);
      await page.waitForSelector('.mobapay-user-character-name', { timeout: 10000 });
      await page.waitForSelector('.mobapay-recharge-wrapper', { timeout: 10000 });
      await page.waitForSelector('.tracker-recharge-item', { timeout: 10000 });

      let nickname = '[Cek di Mobapay]';
      const nicknameElement = await page.$('.mobapay-user-character-name')
        .catch(() => console.log('Elemen nickname nggak ditemukan.'));
      if (nicknameElement) nickname = await nicknameElement.innerText();

      let isValidData = true;
      try {
        const apiUrl = `https://dev.luckycat.my.id/api/stalker/mobile-legend?users=${gameId}&servers=${server}`;
        const apiResponse = await page.evaluate(async (url) => {
          const response = await fetch(url);
          return response.json();
        }, apiUrl);
        if (!apiResponse.status || !apiResponse.data) {
          console.log('API gagal atau data tidak lengkap:', apiResponse.msg);
          isValidData = false;
          // Edit pesan awal dengan error
          await client.sendMessage(msgKey.remoteJid, {
            text: 'Data akun tidak valid: ' + apiResponse.msg,
            edit: msgKey
          }, { quoted: m });
          return;
        }
        nickname = apiResponse.data.nickname || nickname;
        const country = `${apiResponse.data.country} ${apiResponse.data.emoji}`;
        let output = `👤 *Nickname:* ${nickname}\n`;
        output += `🆔 *User ID:* ${gameId}\n`;
        output += `🌐 *Zone ID:* ${server}\n`;
        output += `🌍 *Negara:* ${country}\n`;

        if (isValidData) {
          output += `\n💎 *First Topup Status:*\n`;
          const rechargeItems = await page.$$('.tracker-recharge-item');
          const firstTopupTiers = [50, 150, 250, 500];
          for (const item of rechargeItems) {
            const diamonds = parseInt(await item.getAttribute('data-diamonds') || '0');
            const bonus = await item.getAttribute('data-bonus') || '';
            if (firstTopupTiers.includes(diamonds)) {
              const hasActive = await item.$('.mobapay-recharge-item-active') !== null;
              let hasReachLimit = false;
              const limitElement = await item.$('.mobapay-recharge-item-reachlimit');
              if (limitElement) {
                const limitText = await limitElement.innerText();
                hasReachLimit = limitText.includes('Purchase limit reached');
              }
              const status = hasReachLimit ? '❌' : (hasActive ? '✅' : '✅');
              output += `• ${diamonds} + ${bonus.replace('+', '')} ${status}\n`;
            }
          }
        }
        // Edit pesan awal dengan hasil
        await client.sendMessage(msgKey.remoteJid, {
          text: output,
          edit: msgKey
        });
      } catch (error) {
        console.log('Error mengakses API:', error.message);
        isValidData = false;
        // Edit pesan awal dengan error
        await client.sendMessage(msgKey.remoteJid, {
          text: 'Data akun tidak valid: Error saat mengakses.',
          edit: msgKey
        });
      }
    } catch (error) {
      console.log('error:', error);
      // Edit pesan awal dengan error
      await client.sendMessage(msgKey.remoteJid, {
        text: 'Sabar sayang aku ga kemana, satu-satu gw prosesnya ini pelerrr!\n\n> Usahakan jeda beberapa detik sebelum input data baru ya sayang...\n> Atau mungkin orang lain sedang menggunakan fitur ini juga dalam waktu bersamaan.\n> Coba lagi dalam beberapa saat.',
        edit: msgKey
      });
    } finally {
      await browser.close();
    }
  };

  // Tambah ke queue
  queue.push({ msg: m, gameId, server, msgKey });
  processQueue();
  break;
}
            
case 'bot': {
  let pesanBot;
  if (isGroup) {
    // Cek apakah ada pesan bot spesifik untuk grup ini
    let botgroup = {};
    if (fs.existsSync(botgroupFile)) {
      botgroup = JSON.parse(fs.readFileSync(botgroupFile));
    }
    pesanBot = botgroup[m.chat] || global.bot; // fallback ke global.bot
  } else {
    pesanBot = global.bot;
  }

  client.sendMessage(m.chat, { text: pesanBot }, { quoted: m });
  break;
}

            
case 'setbot': {
  if (!isGroup) return m.reply('❌ Perintah ini hanya bisa dilakukan di dalam grup.');
  if (!isAdmins && !isOwner) return m.reply('❌ Hanya Admin/Owner yang bisa.');

  if (!text) return m.reply('Format salah!\nContoh:\n> setbot Halo semua!');

  // Baca file botgroup
  let botgroup = {};
  if (fs.existsSync(botgroupFile)) {
    botgroup = JSON.parse(fs.readFileSync(botgroupFile));
  }

  botgroup[m.chat] = text;
  fs.writeFileSync(botgroupFile, JSON.stringify(botgroup, null, 2));

  m.reply(`✅ Pesan bot grup berhasil diupdate:\n\n"${text}"`);
  break;
}
           
   case 'min':
   case 'admin':
   case 'etmin':
            {
    client.sendMessage(m.chat, { text: global.min }, { quoted: m });
    break;
}
 
   case 'list':
case 'lists': {
  if (!m.isGroup) return m.reply("Command ini hanya bisa digunakan di Group.");
  const groupID = from;
  listCustomCommands(groupID, m);
}
break;

//tourl custom name-file
      case 'tourl': {
  try {
    if (!m.quoted || !/image/.test(m.quoted.mimetype)) return m.reply('❌ Balas gambar dengan caption *tourl [nama_file]*');

    const namaFile = (args[0] || `${Date.now()}`).replace(/[^a-zA-Z0-9_-]/g, '');
    const filePath = `./tmp/${namaFile}.jpg`;

    // Pastikan folder ./tmp ada
    const tmpDir = './tmp';
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

    // Pake fungsi downloader lokal lo sendiri
    await downloadAndSaveMediaMessage('image', filePath);

    const FormData = require('form-data');
    const form = new FormData();
    form.append('img', fs.createReadStream(filePath));
    form.append('content_type', '0');
    form.append('max_th_size', '420');

    const axiosRes = await axios.post('https://api.pixhost.to/images', form, {
      headers: form.getHeaders()
    });

    const json = axiosRes.data;
    if (!json.show_url) return m.reply('❌ Gagal upload: show_url kosong.');

    // Ambil path file dari show_url
    const match = /\/show\/(\d+)\/(\d+_.+)/.exec(json.show_url);
    if (!match) return m.reply('❌ Gagal parsing URL.');

    const folderId = match[1];
    const filename = match[2];
    const finalUrl = `https://img1.pixhost.to/images/${folderId}/${filename}`;

    m.reply(`✅ Gambar berhasil diupload:\n${finalUrl}`);

    // Opsional: hapus file setelah upload
    fs.unlinkSync(filePath);

  } catch (err) {
    console.error('Error upload PixHost:', err);
    m.reply('❌ Terjadi kesalahan saat upload gambar.');
  }
  break;
}
        
            
        case 'hidetag':
case 'h': {
  if (!m.isGroup) return
  if (!isAdmins) return

  // Fungsi untuk mempertahankan spasi di awal baris
  const fixIndent = (text) => {
    return text.split('\n').map(line => {
      return line.replace(/^ +/g, (spaces) => spaces.replace(/ /g, '\u00A0'))
    }).join('\n')
  }

  // Pastikan teksnya ada & fix indentasi
  const finalText = text ? fixIndent(text) : ''

  client.sendMessage(m.chat, {
    text: finalText,
    mentions: participants.map(a => a.id)
  }, {
    quoted: m
  })
}

      break
      case 'join': {
        if (!isOwner) return
        if (!text) return m.reply(`Link Groupnya Mana?`)
        var ini_urrrl = text.split('https://chat.whatsapp.com/')[1]
        var data = await client.groupAcceptInvite(ini_urrrl).then((res) => m.reply(`Berhasil Join ke grup...`)).catch((err) => m.reply(`Eror.. Munkin bot telah di kick Dari grup tersebut`))
      }
      break
      case 'getip': {
        if (!isOwner) return
        var http = require('http')
        http.get({
          'host': 'api.ipify.org',
          'port': 80,
          'path': '/'
        }, function(resp) {
          resp.on('data', function(ip) {
            m.reply("IP : " + ip);
          })
        })
      }
      break
      case 'kick': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`${users} telah di kick...`)).catch((err) => m.reply('hmmm gagal kick dia'))
      }
      break
            
    case 'del': {
    if (!m.isGroup) return; // Pastikan pesan diterima dari grup
    if (!isAdmins && !isOwner) return; // Hanya admin atau owner yang bisa menghapus pesan
    if (!m.quoted) return; // Pastikan ada pesan yang dibalas

    let target = m.quoted.sender; // Ambil pengirim pesan yang dibalas

    // Hapus pesan yang dibalas
    await client.deleteMessage(m.chat, {
        id: m.quoted.id,
        remoteJid: target,
        fromMe: false
    });

    m.reply('Pesan berhasil dihapus.');
}
break;

      
      case 'linkgroup':
      case 'linkgrup':
      case 'linkgc': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let response = await client.groupInviteCode(m.chat)
        client.sendText(m.chat, `*『 INFO LINK GROUP 』*\n\n» *Nama Grup :* ${groupMetadata.subject}\n» *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n» *ID Grup:* ${groupMetadata.id}\n» *Link Grup :* https://chat.whatsapp.com/${response}\n» *Member :* ${groupMetadata.participants.length}\n`, m, {
          detectLink: true
        })
      }
      break
      case 'updatelist': {
  if (!m.isGroup) return;
  if (!isAdmins) return;

  const groupID = from;
  const updateListCommand = body.slice(10).trim();
  const [updateKey, newResponse] = updateListCommand.split('||').map(s => s.trim());

  if (!updateKey || !newResponse) {
    return m.reply(`Format salah!\nContoh: *${prefix}updatelist KEY||RESPON BARU*`);
  }

  const customCommands = readCustomCommands();
  if (customCommands[groupID] && customCommands[groupID][updateKey.toUpperCase()]) {
    customCommands[groupID][updateKey.toUpperCase()] = newResponse;
    saveCustomCommands(customCommands);
    m.reply(`Sukses Update List\nKata Kunci: *${updateKey.toUpperCase()}*`);
  } else {
    m.reply(`Kata kunci *${updateKey.toUpperCase()}* tidak ditemukan`);
  }
}
break;



break;
  case 'list':
case 'lists': {
  if (!isGroup) return m.reply('Command ini hanya bisa digunakan di grup.');

  const groupID = from;
  const customCommands = readCustomCommands();

  if (!customCommands[groupID] || Object.keys(customCommands[groupID]).length === 0) {
    return m.reply('Belum ada list yang disimpan untuk grup ini.');
  }

  const keys = Object.keys(customCommands[groupID]);

  // Bikin Section list WhatsApp
  const sections = [{
    title: "ðŸ“¦ Daftar Produk Manual",
    rows: keys.map(key => ({
      title: key,
      rowId: `${prefix}getlist ${key}`
    }))
  }];

  const listMessage = {
    text: 'Silahkan pilih list yang ingin ditampilkan:',
    footer: `Atlantic Group - Auto Respon`,
    title: 'ðŸ“‹ LIST PRODUK MANUAL',
    buttonText: 'Klik untuk lihat',
    sections
  };

  client.sendMessage(m.chat, listMessage, { quoted: m });
}
break;

            case 'addlist': {
  if (!m.isGroup) return;

  if (!isAdmins) {
    return m.reply("Fitur ini hanya bisa digunakan oleh admin group ðŸ˜¿");
  }

  const groupID = from;
  const input = args.join(' ').trim();
  const delimiterIndex = input.indexOf('@');

  if (delimiterIndex !== -1) {
    const key = input.slice(0, delimiterIndex).trim().toUpperCase();
    const response = input.slice(delimiterIndex + 1).trim();

    if (!key || !response) {
      return m.reply(`Gunakan dengan cara *${command} key@response*\n\nContoh: *${command} tes@apa*`);
    }

    // Cek apakah key sudah ada di grup ini
    const db = readCustomCommands();
    const existing = db[groupID] && db[groupID][key];

    if (existing) {
      return m.reply(`kata kunci *"${key}"* sudah ada di hatiku ^_^ ðŸ«£`);
    }

    // Simpan key baru
    addCustomCommand(groupID, key, response);
    m.reply(`Sukses Set List Message\nKata Kunci : *${key}*`);
  } else {
    m.reply(`Gunakan dengan cara *${command} key@response*\n\nContoh: *${command} tes@apa*`);
  }
}
break;


            case 'renamelist': {
  if (!isGroup) return;
  if (!isAdmins) return;

  const groupID = from;
  const input = args.join(' ').trim();
  const [oldKey, newKey] = input.split('|').map(v => v.trim().toUpperCase());

  if (!oldKey || !newKey) {
    return m.reply(`Gunakan dengan cara: *${command} oldKey|newKey*\nContoh: *${command} PROMO|PROMO BARU*`);
  }

  const list = readCustomCommands();
  if (!list[groupID] || !list[groupID][oldKey]) {
    return m.reply(`Kata kunci *${oldKey}* tidak ditemukan`);
  }

  // Rename
  list[groupID][newKey] = list[groupID][oldKey];
  delete list[groupID][oldKey];
  saveCustomCommands(list);
  m.reply(`Berhasil rename dari *${oldKey}* menjadi *${newKey}*`);
}
break;

      case 'dellist':
case 'hapuslist': {
  if (!isAdmins) return;
  const groupID = from;
  const dellistCommand = body.slice(8).trim().toUpperCase();
  const customCommands = readCustomCommands();

  if (customCommands[groupID] && customCommands[groupID][dellistCommand]) {
    delete customCommands[groupID][dellistCommand];
    saveCustomCommands(customCommands);
    m.reply(`Sukses Delete List Message\nKata Kunci : *${dellistCommand}*`);
  } else {
    m.reply(`Gunakan dengan cara *${command} key*\n\nContoh: \`\`\`${command} tes\`\`\``);
  }
}
break;
      case 'close': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya = `───〔 *GROUP CLOSE* 〕──

*Group Telah Di Tutup Oleh* @${sender.split("@")[0]}

\`\`\`📆${hariini}
⏰${time1} WIB\`\`\`

اَلْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ 

_Terimakasih atas orderan hari ini, semoga besok lebih lebih laris untuk kita semua aamiin... ✨_`;
        await client.groupSettingUpdate(m.chat, 'announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
      case 'open': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya =
          `───〔 *GROUP OPEN* 〕──

*Group Telah Di Buka Oleh* @${sender.split("@")[0]}

\`\`\`📆${hariini}
⏰${time1} WIB\`\`\`

بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ

_Open guys, jangan lupa awali hari dengan senyuman semoga dilancarkan urusan ✨_`
        
        await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
            

case 'proses':
case 'p': {
    if (!m.quoted || !m.quoted.sender || !isOwner) return;
    
    const users = m.quoted.sender;
    const owned = `${global.nomerOwner}@s.whatsapp.net`;
    const menuInfo =
        `*「 TRANSAKSI PENDING 」*\n\n` +
        `⛅ HARI      : ${hariini}\n` +
        `⌚ JAM       : ${time1}\n` +
        `✨ STATUS : PENDING\n\n` +
        `*PESANAN @${users.split("@")[0]} SEDANG DIPROSES*`;
    
    client.sendMessage(from, { text: menuInfo, contextInfo: { mentionedJid: [users, owned], forwardingScore: 9999, isForwarded: true } }, );
}
break;

case 'done':       
case 'd': {
    if (!m.quoted || !m.quoted.sender || !isOwner) return;
    
    const users = m.quoted.sender;
    const owned = `${global.nomerOwner}@s.whatsapp.net`;
    const menuInfo =
        `*「 TRANSAKSI SUKSES 」*\n\n` +
        `⛅ HARI      : ${hariini}\n` +
        `⌚ JAM       : ${time1}\n` +
        `✨ STATUS : SUKSES\n\n` +
        `*PESANAN @${users.split("@")[0]} TELAH BERHASIL*`;
    
    client.sendMessage(from, { text: menuInfo, contextInfo: { mentionedJid: [users, owned], forwardingScore: 9999, isForwarded: true } }, );
}
break;
       
    
    case 'owner': {
    var owner_Nya = `${global.nomerOwner}@s.whatsapp.net`;

    // Sending the contact
    sendContact(from, owner_Nya, global.ownerName, m);

    // Adding a delay before sending the response message
    setTimeout(() => {
        // Adding respon pesan setelah mengirim kontak owner
        var responseMessage = "*_Itu Kak Kontak Admin Saya, Jika Mau Order Apapun Silahkan Hubungi Dia ya._*\n\n*Admin Juga Menyediakan Jasa Pembuatan Bot Dan Website Topup Otomatis Bagi Kamu Yang Mau Mulai Berbisnis 🤝";
        client.sendText(from, responseMessage);
    }, 1000); // Adjust the delay time as needed

    break;
}
            
case 'afk': {
    if (!m.isGroup) return m.reply("FITUR UNTUK GRUB")
    if (!isOwner) return m.reply("Fitur Ini Khusus Owner!");
    
	const cooldowns = new Map();              
    const now = Date.now();
    const cooldownTime = 5000; // Batas waktu antara eksekusi perintah AFK dalam milidetik (misalnya, 5 detik)

    if (cooldowns.has(m.sender)) {
        const lastExecutionTime = cooldowns.get(m.sender);
        const remainingTime = lastExecutionTime + cooldownTime - now;
        if (remainingTime > 0) {
            return m.reply(`Tunggu beberapa saat sebelum menggunakan perintah AFK lagi. (Sisa Waktu: ${msToDate(remainingTime)})`);
        }
    }

    let reason = text ? text : 'Nothing.';
    afk.addAfkUser(m.sender, Date.now(), reason, _afk);
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m);
    cooldowns.set(m.sender, now); // Catat waktu terakhir pengguna menjalankan perintah AFK
break;
};            
        
     case 'cekff':{
	if (!q) return m.reply(`🔍CEK NICK FREE FIRE\nContoh: cekff 12345678`)
	const id = text.split(' ')[0]
    if  (!id) return m.reply('ID wajib di isi');
	const { stalkff } = require('./lib/stalk-ff.js');
	stalkff(id).then(i=>{
        //console.log(i)
		if (i.status !== 200) return m.reply(i.msg)
		m.reply(`*CEK NICK FREE FIRE*

*ID*: ${id}
*Nickname:* ${i.nickname}`)
	})
break;
}


case 'form': {
  if (!text) {
    return m.reply(`Gunakan:\n> ${prefix + command} [jenis_order] [id] [server] [jumlah]\nContoh:\n> ${prefix + command} sl basic 735660422 8938 3`);
  }

  const parts = text.trim().split(/\s+/);

  if (parts.length < 4) {
    return m.reply(`Format salah!\nContoh:\n> ${prefix + command} sl basic 735660422 8938 3`);
  }

  // Ambil dari belakang
  const jumlah = parts.pop();
  const server = parts.pop();
  const userId = parts.pop();
  const jenisOrder = parts.join(' ').toUpperCase();

  let nickname = 'Tidak ditemukan';

  // Validasi ML: auto get nickname
  if (server !== '-' && userId) {
    try {
      const fetch = require('node-fetch');
      const params = new URLSearchParams();
      params.append('country', 'SG');
      params.append('userId', userId);
      params.append('voucherTypeName', "MOBILE_LEGENDS");
      params.append('zoneId', server);

      const response = await fetch('https://order-sg.codashop.com/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: params
      });

      const data = await response.json();
      if (data.success !== false) {
        nickname = decodeURIComponent(data.result.username);
      }
    } catch (e) {
      console.error('Error fetch ML nick:', e);
    }
  }

  // Tanggal auto
  const today = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const tanggal = today.toLocaleDateString('id-ID', options);

  // Output final
  const formatOrder =
`♡ ˖ *f̲o̲r̲m̲a̲t̲ ̲o̲r̲d̲e̲r̲* 𔔀˖ᣞ۪ 

ᨳ 𝗂𝖽 +﹙𝗌𝖾𝗋𝗏𝖾𝗋﹚: ${userId} (${server})
ᨳ 𝗇𝗂𝖼𝗄𝗇𝖺𝗆𝖾 : ${nickname}
ᨳ 𝗃𝖾𝗇𝗂𝗌 𝗈𝗋𝖽𝖾𝗋 : ${jenisOrder}
ᨳ 𝗃𝗎𝗆𝗅𝖺𝗁 : ${jumlah}
ᨳ 𝗍𝖺𝗇𝗀𝗀𝖺𝗅 𝗈𝗋𝖽𝖾𝗋 : ${tanggal}
ᨳ 𝗈𝗋𝖽𝖾𝗋 𝖻𝗒 : ${m.sender.split('@')[0]}

 ⋮ 𖢷 𖥦 send form to *a̲d̲m̲i̲n̲* .. 🩰`;

  client.sendMessage(m.chat, { text: formatOrder }, { quoted: m });
}
break;



            
          case 'mlreg':{
    if (!text) {
        return m.reply(`*MOBILE LEGENDS VALIDASI ID V2.0*\n\nGunakan dengan cara :\n> ${prefix + command} ID SERVER\n\nContoh :\n> ${prefix + command} 640015932 10164`);
    }
    const fetch = require('node-fetch');
    const url = 'https://order-sg.codashop.com/validate';
    const userId = args[0];
    const zoneId = args[1];
    const country = "SG";

    if (!userId || !zoneId) {
        return m.reply(`Format Salah!\n\nSilakan gunakan dengan cara :\n\n> ${prefix + command} userId zoneId\n\nContoh :\n> ${prefix + command} 640015932 10164`);
    }

    const params = new URLSearchParams();
    params.append('country', country)
    params.append('userId', userId);
    params.append('voucherTypeName', "MOBILE_LEGENDS")
    params.append('zoneId', zoneId);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: params
        });
        const data = await response.json();
        console.log(data);
        if (data.success === false) { 
            return m.reply(`Maaf, ID tidak valid`);
        } else {
            const encodedUsername = data.result.username;
            const decodedUsername = decodeURIComponent(encodedUsername);
            const regionCountry = data.result.create_role_country.toUpperCase();
            const regionLogin = data.result.this_login_country.toUpperCase();
            
            const message = ` *DETAIL AKUN MOBILE LEGENDS*\n\n Username: ${decodedUsername}\n Region Akun: ${regionCountry}\n Region Login: ${regionLogin}`;
            client.sendMessage(m.chat, { text: message }, { quoted: m });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return m.reply('Maaf terjadi kesalahan, silahkan cek Console untuk informasi lebih lanjut');
    }
    break;
}

case "cekpln": {
    if (!text) return m.reply(`!Silahkan isi dengan nomer meter\n\nContoh : cekpln 14331231507`)
        let data = {
          commands: 'pln-subscribe',
    customer_no: text,
        }
        fetch('https://api.digiflazz.com/v1/transaction', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
          .then((res) => {
            const pesan = `*──••• 「 CEK DATA PLN 」 •••──*

Nama : ${res.data.name}
Nomor Meter: ${res.data.meter_no}
Subscribe: ${res.data.subscriber_id}
Daya : ${res.data.segment_power}`            
            client.sendMessage(m.chat,{text:pesan})
          })
break;
}    
            case 'antilink': {
  if (!isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply("Jadikan saya Admin dulu ya :)");
  
  const action = args[0]; // 'on' untuk mengaktifkan atau 'off' untuk menonaktifkan
  
  if (action === 'on') {
    antilink.push(from);
    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2));
    m.reply(`âœ… Sukses mengaktifkan fitur antilink di group *${groupMetadata.subject}*`);
  } else if (action === 'off') {
    const index = antilink.indexOf(from);
    if (index !== -1) {
      antilink.splice(index, 1);
      fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2));
      m.reply(`âœ… Sukses menonaktifkan fitur antilink di group *${groupMetadata.subject}*`);
    } else {
      m.reply(`Fitur antilink tidak aktif di group *${groupMetadata.subject}*.`);
    }
  } else {
    m.reply('Gunakan "on" untuk mengaktifkan atau "off" untuk menonaktifkan fitur antilink.');
  };
break;
};           
   
      // Test Button Message case - sesuai dokumentasi nstar-y/bail
      case 'testbutton': {
        if (!isOwner) return m.reply('❌ Hanya owner yang bisa menggunakan command ini.');
        
        const buttons = [
          { buttonId: 'button_1', buttonText: { displayText: 'Button 1' }, type: 1 },
          { buttonId: 'button_2', buttonText: { displayText: 'Button 2' }, type: 1 },
          { buttonId: 'button_3', buttonText: { displayText: 'Button 3' }, type: 1 }
        ];

        const buttonMessage = {
          text: "🧪 *Test Button Message*\n\nIni adalah testing fitur button message dari baileys-mod dengan AI icon!",
          footer: `© ${global.botName} - Powered by baileys-mod`,
          buttons,
          headerType: 1,
          ai: true
        };

        await client.sendMessage(m.chat, buttonMessage, { quoted: m });
        break;
      }

      // Test Button dengan Image
      case 'testbuttonimg': {
        if (!isOwner) return m.reply('❌ Hanya owner yang bisa menggunakan command ini.');
        
        const buttons = [
          { buttonId: 'like_button', buttonText: { displayText: '👍 Like' }, type: 1 },
          { buttonId: 'share_button', buttonText: { displayText: '📤 Share' }, type: 1 },
          { buttonId: 'more_info_button', buttonText: { displayText: '� More Info' }, type: 1 }
        ];

        const buttonMessage = {
          image: { url: "https://picsum.photos/500/300" },
          caption: "🖼️ *Test Button dengan Image*\n\nIni adalah testing fitur button message dengan gambar dari baileys-mod dan AI icon!",
          footer: `© ${global.botName} - Advanced WhatsApp Bot`,
          buttons,
          headerType: 1,
          ai: true
        };

        // Array URL gambar dengan fallback
        const imageUrls = [
          "https://picsum.photos/500/300", // Random image dari Picsum
          "https://via.placeholder.com/500x300/4a90e2/ffffff?text=Test+Button+Image", // Placeholder backup
          "https://dummyimage.com/500x300/4a90e2/ffffff&text=Button+Test" // Fallback kedua
        ];

        let success = false;
        let finalButtonMessage = buttonMessage;

        // Coba menggunakan getBuffer untuk download gambar
        for (let i = 0; i < imageUrls.length && !success; i++) {
          try {
            console.log(`🔄 Mencoba download gambar ${i + 1}: ${imageUrls[i]}`);
            
            // Download gambar menggunakan fungsi getBuffer yang sudah ada
            const imageBuffer = await getBuffer(imageUrls[i]);
            
            if (imageBuffer && !imageBuffer.message && Buffer.isBuffer(imageBuffer)) {
              // Prepare media menggunakan baileys-mod
              const preparedMedia = await prepareWAMessageMedia({ image: imageBuffer }, { upload: client.waUploadToServer });
              
              finalButtonMessage = {
                ...buttonMessage,
                image: preparedMedia.image,
                caption: `🖼️ *Test Button dengan Image*\n\nGambar berhasil dimuat dari: ${imageUrls[i]}\n\nIni adalah testing fitur button message dengan gambar dari baileys-mod dan AI icon!`
              };
              
              success = true;
              console.log(`✅ Berhasil memuat gambar dari: ${imageUrls[i]}`);
              break;
            }
          } catch (error) {
            console.log(`❌ Gagal memuat gambar ${i + 1}:`, error.message);
            continue;
          }
        }

        // Jika semua URL gagal, gunakan fallback text message
        if (!success) {
          console.log('⚠️ Semua URL gambar gagal, menggunakan text fallback');
          finalButtonMessage = {
            text: "🖼️ *Test Button Message*\n\n⚠️ Semua sumber gambar tidak dapat dimuat, tetapi button tetap berfungsi!\n\nIni adalah testing fitur button message dari baileys-mod dengan AI icon!",
            footer: `© ${global.botName} - Advanced WhatsApp Bot`,
            buttons,
            headerType: 1,
            ai: true
          };
        }

        try {
          await client.sendMessage(m.chat, finalButtonMessage, { quoted: m });
        } catch (error) {
          console.log('❌ Pengiriman pesan gagal:', error.message);
          // Ultimate fallback - simple text message
          await client.sendMessage(m.chat, {
            text: "❌ *Error pada Test Button*\n\nTerjadi kesalahan saat mengirim button message. Silakan coba lagi nanti.",
            ai: true
          }, { quoted: m });
        }
        break;
      }

      // Test Interactive Message
      case 'testinteractive': {
        if (!isOwner) return m.reply('❌ Hanya owner yang bisa menggunakan command ini.');
        
        const interactiveButtons = [
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "Quick Reply",
              id: "quick_reply_1"
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Visit Website",
              url: "https://github.com/nstar-y/Bail"
            })
          },
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "Copy Code",
              id: "copy_code_1",
              copy_code: "BAILEYS-MOD-2025"
            })
          }
        ];

        const interactiveMessage = {
          text: "⚡ *Test Interactive Message*\n\nIni adalah testing fitur interactive message dengan berbagai jenis button dan AI icon!",
          title: "Interactive Message Test",
          footer: `© ${global.botName} - baileys-mod features`,
          interactiveButtons,
          ai: true
        };

        await client.sendMessage(m.chat, interactiveMessage, { quoted: m });
        break;
      }

      // Test AI Icon Feature
      case 'testai': {
        if (!isOwner) return m.reply('❌ Hanya owner yang bisa menggunakan command ini.');
        
        // Regular message without AI icon
        await client.sendMessage(m.chat, { 
          text: "📨 *Regular Message*\n\nIni adalah pesan biasa tanpa AI icon."
        }, { quoted: m });
        
        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Message with AI icon
        await client.sendMessage(m.chat, { 
          text: "🤖 *AI Message*\n\nIni adalah pesan dengan AI icon yang menunjukkan bahwa pesan ini dari bot AI!",
          ai: true
        }, { quoted: m });
        
        break;
      }

      // Test Album Message with AI
      case 'testalbum': {
        if (!isOwner) return m.reply('❌ Hanya owner yang bisa menggunakan command ini.');
        
        // Array URL gambar dengan fallback
        const imageUrls = [
          "https://picsum.photos/500/300", // Random image dari Picsum
          "https://via.placeholder.com/500x300/4a90e2/ffffff?text=Test+Album+1", // Placeholder backup
          "https://dummyimage.com/500x300/4a90e2/ffffff&text=Album+Test+1" // Fallback kedua
        ];

        const imageUrls2 = [
          "https://picsum.photos/500/400", // Random image dari Picsum
          "https://via.placeholder.com/500x400/e74c3c/ffffff?text=Test+Album+2", // Placeholder backup
          "https://dummyimage.com/500x400/e74c3c/ffffff&text=Album+Test+2" // Fallback kedua
        ];

        let albumMedia = [];
        let successCount = 0;

        // Download gambar pertama
        for (let i = 0; i < imageUrls.length; i++) {
          try {
            console.log(`🔄 Mencoba download gambar album 1 dari: ${imageUrls[i]}`);
            const imageBuffer = await getBuffer(imageUrls[i]);
            
            if (imageBuffer && !imageBuffer.message && Buffer.isBuffer(imageBuffer)) {
              const preparedMedia = await prepareWAMessageMedia({ image: imageBuffer }, { upload: client.waUploadToServer });
              albumMedia.push({ image: preparedMedia.image });
              successCount++;
              console.log(`✅ Berhasil memuat gambar album 1 dari: ${imageUrls[i]}`);
              break;
            }
          } catch (error) {
            console.log(`❌ Gagal memuat gambar album 1 dari ${imageUrls[i]}:`, error.message);
            continue;
          }
        }

        // Download gambar kedua
        for (let i = 0; i < imageUrls2.length; i++) {
          try {
            console.log(`🔄 Mencoba download gambar album 2 dari: ${imageUrls2[i]}`);
            const imageBuffer = await getBuffer(imageUrls2[i]);
            
            if (imageBuffer && !imageBuffer.message && Buffer.isBuffer(imageBuffer)) {
              const preparedMedia = await prepareWAMessageMedia({ image: imageBuffer }, { upload: client.waUploadToServer });
              albumMedia.push({ image: preparedMedia.image });
              successCount++;
              console.log(`✅ Berhasil memuat gambar album 2 dari: ${imageUrls2[i]}`);
              break;
            }
          } catch (error) {
            console.log(`❌ Gagal memuat gambar album 2 dari ${imageUrls2[i]}:`, error.message);
            continue;
          }
        }

        try {
          if (successCount > 0) {
            await client.sendMessage(m.chat, { 
              album: albumMedia, 
              caption: `🖼️ *Test Album Message*\n\nBerhasil memuat ${successCount} gambar untuk album!\n\nIni adalah testing fitur album message dengan AI icon!`,
              ai: true
            }, { quoted: m });
          } else {
            throw new Error('Tidak ada gambar yang berhasil dimuat');
          }
        } catch (error) {
          console.log('❌ Album failed, sending text message instead:', error.message);
          await client.sendMessage(m.chat, {
            text: "🖼️ *Test Album Message*\n\n⚠️ Album tidak dapat dimuat karena semua sumber gambar gagal!\n\nTetapi fitur AI icon tetap berfungsi. Ini seharusnya menampilkan multiple gambar dalam satu pesan.",
            ai: true
          }, { quoted: m });
        }
        
        break;
      }

      default:
    }
  } catch (err) {
    m.reply(util.format(err))
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})