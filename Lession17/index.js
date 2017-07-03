var fs = require('fs');

var readStream = fs.createReadStream('note.txt');
var writeStream = fs.createWriteStream('sample.txt');

readStream.on('data', function(chunk){
	writeStream.write(chunk);
});

readStream.on('end', function(){
	writeStream.end();
	console.log("End");
});


