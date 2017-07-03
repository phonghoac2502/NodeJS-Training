var events = require('events'),
	emitter = new events.EventEmitter(),
	username = "Phong",
	password = "12345";

emitter.on("account", function(user, pass){
	console.log("User: "+ user + " - Pass: "+ pass);
});

emitter.on("course", function(data){
	console.log(data);
});


emitter.emit("account", username, password);
emitter.emit("course", "Programming course");