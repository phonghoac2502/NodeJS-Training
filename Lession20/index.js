var Duplex = require('stream').Duplex;
var fs = require('fs');

Duplex.Eeadable  = fs.createReadStream('note.txt');
Duplex.Writeable = fs.createWriteStream('sample.txt');

Duplex.Readable.on('data', function(chunk){
	Duplex.Writeable.write(chunk);
});

Duplex.Readable.on('end', function(){
	console.log("Finished");
});