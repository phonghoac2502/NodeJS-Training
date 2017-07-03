"use strict";

class Student{
	constructor(name,score){
		this.name = name;
		this.score = score;
	}
	
	AnnounceScore(){
		console.log(this.name + "'s score is " + this.score);
	}
}

var student = new Student("Phong", 10);
student.AnnounceScore();