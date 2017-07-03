"use strict"

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	
	ShowInformation(){
		return "Your name is " + this.name + " and you are " + this.age + " years old.";
	}
}

class Teacher extends Person{
	constructor(name, age, job){
		super(name, age);
		this.job = job;
	}
	
	ShowInformation(){
		return super.ShowInformation() + " You are a " + this.job;
	}
}

var teacher = new Teacher("Quach Chau Hien", 25, "teacher");
console.log(teacher.ShowInformation());