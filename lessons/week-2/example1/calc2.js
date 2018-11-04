// creating a module that exports a single object with four properties
// module.exports = {
// 	sum: () => {},
// 	subtract: () => {},
// 	multiply: () => {},
// 	divide: () => {}
// }

// this is the cleaner, terser way to write the above export object
exports.sum = (a, b) => a + b;

exports.subtract = (a, b) => a - b;

exports.multiply = (a, b) => a * b;

exports.divide = (a, b) => a / b;