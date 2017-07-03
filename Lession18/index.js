var fs = require('fs');

var ws = fs.createWriteStream('sample.txt');
var rs = fs.createReadStream('note.txt');

rs.pipe(ws);
