const { Telegraf, Markup } = require("telegraf");
const path = require("path");

const botApp = "https://t.me/UniSwapbot/UniSwapApp";
const token = "6918635120:AAHhIx8csASASWBp3LTeRxBLjWv0Jm3jCjg";

const bot = new Telegraf(token);

bot.start((ctx) => {
  const imagePath = path.join(__dirname, 'photo_2024-08-24_14-40-26.jpg');
  
  ctx.replyWithPhoto(
    { source: imagePath }, 
    {
      caption: `👏 Minting a new beginning on [Telegram](https://t.me/durov)\n\n` +
      ` We announce the official launch of the Mini App version of UniSwap.org.`,
      parse_mode: 'Markdown', 
      ...Markup.inlineKeyboard([
        [Markup.button.url('🦄 Mini App', 'https://t.me/UniSwapbot/UniSwapApp')],
        [Markup.button.callback('Connect Wallet', 'xxxx'),Markup.button.url('Twitter', 'https://x.com/uniswap')],
        [Markup.button.url('Chanel', 'https://t.me/UniSwapNew'),Markup.button.url('Suportt', 'https://t.me/UniSwapTips')],
      ])
    }
  );
});


bot.launch();

console.log("Bot is running...");
