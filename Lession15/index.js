var fs = require('fs');

var readStream = fs.createReadStream('note.txt');
var content = '';
var chunk;
var i =1 ;
readStream.on('readable', function(){
	while((chunk = readStream.read()) != null){
		//content += chunk;
		console.log(i);
		i++;
		//console.log(chunk.length);
	}
});

readStream.on('end', function(){
	//console.log(content);
});