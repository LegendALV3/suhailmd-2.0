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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_53_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOU5KYjJwT0NNUVdHYVJLT040emkrSWFzTVdyakpJeVd3Q0lYT05VV3Q1OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNHhZajRZZ3NRSXE1ay1xaVNIT1Fvd1wiLFxuICBcInBob25lSWRcIjogXCIxM2I0YzkzNS05Y2U0LTQ5YWMtYmVlZS0yY2I5MTRkMWMxNWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAyNTEsXG4gICAgICA2NCxcbiAgICAgIDE1MixcbiAgICAgIDE3OSxcbiAgICAgIDE4LFxuICAgICAgMTk2LFxuICAgICAgMTY0LFxuICAgICAgMjI5LFxuICAgICAgMTg1LFxuICAgICAgNTUsXG4gICAgICAxMyxcbiAgICAgIDE3LFxuICAgICAgMTgsXG4gICAgICAxMyxcbiAgICAgIDIsXG4gICAgICA0LFxuICAgICAgMTA4LFxuICAgICAgMTU1LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgNjAsXG4gICAgICA0MSxcbiAgICAgIDU4LFxuICAgICAgMjM5LFxuICAgICAgMjE5LFxuICAgICAgOTEsXG4gICAgICAyMTUsXG4gICAgICA3NSxcbiAgICAgIDE1MSxcbiAgICAgIDE0MCxcbiAgICAgIDExMixcbiAgICAgIDksXG4gICAgICAzLFxuICAgICAgMTMxLFxuICAgICAgMTAyLFxuICAgICAgODUsXG4gICAgICAxNDEsXG4gICAgICA5OCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhHVzVSRkdZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNjI2NDY3NTY3Nzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI0NDk0NDI1Mzc4ODUzOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rZnJiRUZFTmFEL2JvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS09pOWZXQkJTTXJRNUZ3OUNKWE5iVXdTRTZkOXJsSEMrTGZBL1JHbVBIST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHS0E2US9tc2xvV0dWZlRQdEVwTjNod0N4NDQ4QStQckVCeVo0SGwrQmRrMzRQVk90b2tNaTRLLzBkSkpJb3hRNk12TjZLd1k4cDB6MFZKcDRIWE5BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1MG9YeUVEYXAyOXgxVERvbzVQUDVhRFhYaFlaOTNlOTgrd1V4WllSQ3hLWVZZMUUxdjN6c2pzdjAzNWROWTBaZ0JuTlhldi9BZmJqRTBxcVZGWW5EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNjI2NDY3NTY3Nzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQyOTYwMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMa1ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxrVi5qc29uIjogIntcImtleURhdGFcIjpcIkMzZnVDcmpCTmFSWk52ZERaZlU5MEgvNDZZN1J6SHJRUDYyZzJCajF0bGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0NTY3OTA4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "LEGENDARY",
  ownername:process.env.OWNER_NAME|| "Legend",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "AYANOKOJI"  ).toUpperCase(),



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
