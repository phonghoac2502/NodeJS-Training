var events = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
}
util.inherits(Person, events.EventEmitter);

var phong = new Person("Phong");
var hien = new Person("Hien");

var people = [phong, hien];
people.forEach(function(pp){
	pp.on("speak", function(msg){
		console.log(pp.name + " say: " + msg);
	});
});

phong.emit("speak", "Hello Phong");
hien.emit("speak", "Hello Hien");