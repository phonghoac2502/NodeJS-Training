var fs = require('fs');

var writeStream = fs.createWriteStream('note.txt');

for(var i = 0; i< 1000000; i++){
	writeStream.write("Hello! My name is Phong\n");
}

writeStream.end();