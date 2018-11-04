const sentencer = require('sentencer');

const names = [
	'Rachel',
	'Monica',
	'Phoebe',
	'Ross',
	'Chandler',
	'Joey'
];

// module.exports = {
// 	pickName: pickName,
// };

exports.pickName = () => {
	const randomName = Math.floor(Math.random() * names.length);
	return names[randomName];
}

exports.generateSentence = () => {
	return sentencer.make('The {{ adjective }} brown {{ noun }} jumped over the {{ adjective }} {{ noun }}.');
}

exports.uptime = os.uptime;