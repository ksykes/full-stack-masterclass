const express = require('express');

const router = express.Router();

const letters = [
    { type: 'letter', from: 'Kait', to: 'Kitty'},
    { type: 'package', from: 'Kait', to: 'Brandie' },
    { type: 'letter', from: 'Kait', to: 'Dylan' },
    { type: 'letter', from: 'Kait', to: 'Karchiri' },
    { type: 'letter', from: 'Kait', to: 'Patrick' },
    { type: 'letter', from: 'Kait', to: 'Séanin' }
]

router.route('/')
.get((req, res) => {
        // Most API responses will have a variable of one object (result) with one object called data and all responses will live inside there
        const result = {
            data: letters,
        };
        res.json(result);
    })
    .post((req, res) => {
        // const body = req.body;
        const { type, from, to } = req.body;
        // rudimentary validation: if type and from and to exist, it will do these things...
        if (type && from && to) {
            const mail = {
                type: req.body.type,
                from: req.body.from,
                to: req.body.to
            };
            letters.push(mail);
            res.send('Got it!');
        } //implied else
        res.status(400).send();
    });

exports.router = router;