'use strict';
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api'),
// Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
		telegram = new TelegramBot("349286184:AAFJQPLU0xbQAvd8HcB6I2nMp5xrpwzV7KU", { polling: true });

app.set('port', (process.env.PORT || 5000));


app.get('/', function (req, res) {
	res.json({ 1: 2});
	res.end();
});

function getReply(text) {
	if (text.includes('ничо')) {
		return 'Вот и хорошо';
	} else if (text.includes('/start')) {
		return 'Давай, расскажи мне о своих проблемах.';
	} else {
		return 'И чо?';
	}
}

telegram.on("inline_query", (query) => {
	var searchTerm = query.query.trim();
	console.log(searchTerm);
	telegram.answerInlineQuery(query.id, [
		{
			type: "article",
			id: "testarticle",
			title: "Hello world",
			input_message_content: {
				message_text: "Hello, world! This was sent from my super cool inline bot."
			}
		}
	]);
});

// telegram.on("text", (message) => {
// 	console.log(message);
// 	const text = message.text.toLowerCase();
// 	const reply = getReply(text);
// 	telegram.sendMessage(message.chat.id, reply, {
// 		parse_mode: "Markdown"
// 	});
// });

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});
