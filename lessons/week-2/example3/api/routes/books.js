const express = require('express');
const router = express.Router();

const books = [
	{ id: 1, name: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling'},
	{ id: 2, name: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' },
	{ id: 3, name: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling' },
	{ id: 4, name: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling' },
	{ id: 5, name: 'Harry Potter and the Order of Phoenix', author: 'J.K. Rowling' },
	{ id: 6, name: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling' },
	{ id: 7, name: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling' }
];

router.route('/:identifier')
	.get((req, res) => {
		const identifier = req.params.identifier;
		const matchingBooks = books.filter((book) => {
			if (book.id === Number(identifier)) {
				return true;
			} else {
				return false;
			}
		});

		if (matchingBooks.length > 0) {
			res.json({ data: matchingBooks });
		} else {
			res.status(404).send();
		}
	});

router.route('/')
	.get((req, res) => {
		res.json({ data: books });
	})
	.post((req, res) => {
		const { body } = req;
		const { name, author } = body;

		const id = books.length;

		const book = {
			// JavaScript assumes that because you passed in just one value, it will create key value pairs with the same word
			id,
			name,
			author
		};

		books.push(book);
		// res.json({ data: [{ id: id }] });

		// Expanded notation of above:
		const result = {
			data: [
				{ id: id },
			],
		};

		res.json(result);
	});

exports.router = router;