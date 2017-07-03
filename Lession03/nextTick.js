console.log("Start");

process.nextTick(function(){
	console.log("Running");
});

console.log("End");