const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6281224258870' , '6289653544913']
global.nomerOwner = '6281224258870'

global.nomerBot = '6285169545258' 
global.botName = 'aqualyn v1'
global.ownerName = 'Reyvan'
global.sessionName = 'session' 
namaStore = 'AtlanticGate' // NAMA STORE KAMU

global.bot = "y"
global.min = `tag aja etminnya kalo ngartis`


// Respon Bot
global.mess = {
  wait: "Loading...",
  owner: "Maaf kak, fitur ini khusus Owner",
  waitdata: "Melihat Data Terkini...",
  admin: "Fitur Khusus Admin Group!",
  group: "Fitur Khusus Group!",
  private: 'Silahkan menggunakan Fitur ini di Private Chat!',
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})