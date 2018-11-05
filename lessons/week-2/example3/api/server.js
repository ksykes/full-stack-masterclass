const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Structure should be a bunch of routes in your route folder, uniquely named - one for each thing.
const mailboxHandler = require('./routes/mailbox');
const bookHandler = require('./routes/books');

// Parse body object as JSON so we can use it in our JavaScript - it's like a translator
app.use('/mailbox', mailboxHandler.router);
app.use('/books', bookHandler.router);

// app.get('/', (request, response) => {
// 	response.send('Hello world!');
// });

// app.get('/name', (request, response) => {
// 	response.send('Kait Sykes');
// });

// CLEARER NOTATION:
// app.get('/mailbox', (req, res) => {
// 	res.json({
// 		firstName: 'Kait',
// 		lastName: 'Sykes',
// 	});
// });

// app.post('/mailbox', (req, res) => {
// 	console.log(req.body);
// 	res.send('Got your stuff.');
// });

// MORE TERSE NOTATION:
// app
// 	.get('/mailbox', (req, res) => {
// 		res.json({
// 			firstName: 'Kait',
// 			lastName: 'Sykes'
// 		});
// 	})
// 	.post('/mailbox', (req, res) => {
// 		console.log(req.body);
// 		res.send('Got your stuff.');
// 	});

module.exports = app;