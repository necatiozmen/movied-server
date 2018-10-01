const fs = require('fs');

let rawdata = fs.readFileSync('sample.json');
let db = JSON.parse(rawdata);

module.exports = db;
