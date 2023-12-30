
const fs            = require('fs')
const chalk         = require('chalk')
const moment        = require('moment-timezone')

global.grup         = '-'
global.ig           = '@someone.ex_'
global.thumb        = fs.readFileSync("./databot/image/thumb.jpg")
global.email        = 'attackercyberteam@gmail.com'
global.region       = 'indonesia'

global.ownername    = 'kevo'
global.domain       = '-'
global.apikey2      = 'xxx' //  Apikey Pltc Dari Panel Kalo admin
global.capikey2     = 'xxx' //  Apikey Plta 
global.eggsnya      = '15' // id eggs yang dipakai
global.location     = '1' // id location
global.owner        = ['6287732200388']
global.keyopenai    = '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'
global.ibeng        = 'Yl4h5x9wiA'
global.botname      = 'BOT_FORGROUP'
global.packname     = 'BOT_FORGROUP'
global.author       = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube:BTR CHANNEL`
global.prefa        = ['','!','.',',','🐤','🗿']
global.sessionName  = 'session'
global.sp           = '⭔'
global.anticall     = true

global.mess         = {
    success: '🤗 Done ~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Upgrade Ke Premium Cuma 5k* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k',
}

global.limitawal = {
    premium: "Infinity",
    free: 60
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})