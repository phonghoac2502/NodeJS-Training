var zlib = require('zlib');
var fs = require('fs');

var rs = fs.createReadStream('note.txt');
var ws = fs.createWriteStream('note.txt.zip');

rs.pipe(zlib.createGzip()).pipe(ws).on('finish', function(){
	console.log('Successfully!');
});