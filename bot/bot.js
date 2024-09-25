import { Telegraf } from "telegraf"; // require o'rniga import ishlatilmoqda

const TOKEN = "7256308330:AAHXSSedwPhJWyc8UvTOVTnrTlHGLEx8xzs";
const bot = new Telegraf(TOKEN);

const web_link = "https://flags-topaz.vercel.app/";

bot.start((ctx) => 
  ctx.reply("Assalomu aleykum 💀", {
    reply_markup: {
      keyboard: [[{ text: "Panto WebApp", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();