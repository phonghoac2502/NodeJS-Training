var http = require('http'),
	fs = require('fs');

http.createServer(function(req, res){
	var path = "001 Create a New JIRA Project.mp4";
	var stat = fs.statSync(path);
	var total = stat.size;
	if(req.headers.range){
		var range = req.headers.range;
		var parts = range.replace(/bytes=/,"").split("-");
		var partialStart = parts[0];
		var partailEnd = parts[1];
		var start = parseInt(partialStart, 10);
		var end = partailEnd ? parseInt(partialEnd, 10) : total -1;
		var chunk = (end - start) + 1;
		var file = fs.createReadStream(path, {start: start, end : end});
		res.writeHead(206,{
			'Content-Range' : 'bytes ' + start + ' - ' + end + '/' + total,
			'Accept-Ranges' : 'bytes',
			'Content-Length' : end + ' - ' + start,
			'Content-Type' : 'video/mp4'
		});
		file.pipe(res);
	}else{
		res.writeHead(200, {'Content-Length' : total,'Content-Type' : 'video/mp4'});
		fs.createReadStream(path).pipe(res);
	}
	
}).listen(6969, '127.0.0.1');

console.log("Server running at http://localhost:6969");