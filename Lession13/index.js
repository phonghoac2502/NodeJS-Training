"use strict"
var EventEmitter = require("events").EventEmitter;
	
class Logger extends EventEmitter{
	constructor(){
		super();
		this.msg = "Default message.";
	}
	onLog(){
		this.on("log", function(message){
			console.log("Log: " + message);
		});
	}
	onEmit(message){
		if (message){
			this.msg = message;
		}
		this.emit("log", this.msg);
	}
}
	
var logger = new Logger();
logger.onLog();
logger.onEmit();