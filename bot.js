const { Telegraf, Markup } = require("telegraf");
const http = require("http");

/* const botApp = process.env['APP']
const token = process.env['BOT_TOKEN']; */
const botApp = "https://t.me/UniSwapbot/UniSwapApp";
const token = "6918635120:AAHhIx8csASASWBp3LTeRxBLjWv0Jm3jCjg";

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply(
    `👛 Receive, send, store, play and win with cryptocurrencies at any time.\n` +
    `Join our channel and our chat.`,
    Markup.inlineKeyboard([
      [Markup.button.url("Let´s Play!!!", botApp)],
      [Markup.button.url("Learn more", "https://t.me/UniSwapNew/18"), Markup.button.url("Our channel", "http://t.me/UniSwapNew")],
      [Markup.button.url("Our chat", "http://t.me/UniSwaptips"), Markup.button.callback("Button 3", "btn_3")],
      [Markup.button.callback("Button 2", "btn_2")]
    ])
  );
});

bot.action("btn_2", (ctx) => {
  ctx.reply("You pressed Button 2");
});

bot.action("btn_3", (ctx) => {
  ctx.reply("You pressed Button 3");
});

bot.launch();

console.log("Bot is running...");

// SERVER
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
