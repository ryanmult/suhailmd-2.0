const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_01_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgODksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICA2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRGcrSWF1ZTVPZ2JjMjlpS000ZEwxMGhYYUJhZkpjTG1DaFJMcEorbXhxWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVWdrcHRfOW9SanFiNjlvb1Jzd1BmUVwiLFxuICBcInBob25lSWRcIjogXCJjNGI0YTMwYi0wOTI3LTRlMzMtOTFhYS0zZjcwNDM4NjhiZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAxMjUsXG4gICAgICAzMCxcbiAgICAgIDE0MixcbiAgICAgIDMzLFxuICAgICAgOTMsXG4gICAgICAxNTQsXG4gICAgICAyMjgsXG4gICAgICAyMzAsXG4gICAgICAxODksXG4gICAgICAyMjksXG4gICAgICAxNixcbiAgICAgIDIxOSxcbiAgICAgIDIzNCxcbiAgICAgIDM5LFxuICAgICAgMTk4LFxuICAgICAgMTUwLFxuICAgICAgMTUyLFxuICAgICAgMTQ2LFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgMjQwLFxuICAgICAgMzcsXG4gICAgICAyMTUsXG4gICAgICAxMDksXG4gICAgICAyNDIsXG4gICAgICAxMTksXG4gICAgICAxMDMsXG4gICAgICA0MyxcbiAgICAgIDMzLFxuICAgICAgMTk3LFxuICAgICAgMTkxLFxuICAgICAgMTk2LFxuICAgICAgMTgxLFxuICAgICAgODQsXG4gICAgICA0NCxcbiAgICAgIDIwMixcbiAgICAgIDQzLFxuICAgICAgMjI2LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjROVE1aVkxNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDI4MTAyOTA6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJZQU4gU0hBV09PRFNcIixcbiAgICBcImxpZFwiOiBcIjg5NTcyMDc5ODc4MjYzOjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDMW9xc0JFT090N0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUW9OdTZwc1VYWjZpUkQyTHpFNmF4T0NhYjB4SDRSbkw0Sk5aaHIvcWxCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXTkcrSTFnWFMvejRBdmsrNWNtOWUrUmF6T1NFcngxcWVCdElETEZLejljd2NqTFJyYnVHWUtySUdKYWZCTHpGYkZ4K2lqUVR4SHpBTkp4TFdvQ1RDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwVUY1MUozZ2pIcU04YXlxeFlnL3FXMmVLSHlReHYxMmdCSEdxM2xnRVdPYi92VWhHYitnZEM3Z3l6WkQ5TDRWVTBnUU54WEM3WDA4cWo0VExjbzlqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NDI4MTAyOTA6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MDIyODg3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
