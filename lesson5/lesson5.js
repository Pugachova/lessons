//Task 1

function propsCount(currentObject){
  console.log(Object.keys(currentObject).length);
}

let mentor = {"width": 20, "height" : 30, "weight": 50, "material" : "wood"};
propsCount(mentor);


//Task 2

var user = {
  "width": 20, 
  "height" : 30, 
  "weight": 50, 
  "material" : "wood",
  "brand" : "WoodPlast"
};
showProps(user);


function showProps(obj){
  console.log("Fields: ", Object.keys(obj));
  console.log("Values: ", Object.values(obj));
}


//Task 3 

class Person {

  name;
  surname; 

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log("Person: " + this.name + " " + this.surname);
  }
}

class Student extends Person {

    year;

    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }

  showFullName(middlename) {
    console.log("Student: " + this.name + " " + middlename + " " + this.surname);
  }

  showCourse() {
      var ageDifMs = Date.now() - new Date(this.year, 9);
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      console.log("Course: " + Math.abs(ageDate.getUTCFullYear() - 1970));
  }
}

let prs = new Person("Ivan", "Pupkin");
prs.showFullName();

let std = new Student("Ivan", "Pupkin", 2015);
std.showFullName("J.");
std.showCourse();



//Task 4

class Worker {

  fullName;
  dayRate; 
  workingDays;
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays,#experience) {
    this.fullName = fullName;
    this.dayRate = dayRate;
	this.workingDays = workingDays;
	this.#experience = #experience;
  }

  showSalary() {
    console.log(dayRate*workingDays);
  }

  showSalaryWithExperience(){
	console.log(dayRate*workingDays*(1.2/100));
}
  showSalaryWithExperience();
	
  getExperience() {
	  return this.#experience;
  } 
  setExperience(value) {
    this.#experience = value;
  }
  
}
let worker = new Worker();
worker.experience = 1.5;
 showSalaryWithExperience(){
	console.log(dayRate*workingDays*(1.5/100));
}


class Person extends Worker {

    salary;

    constructor(fullName, dayRate, workingDays,#experience, salary) {
      super(fullName, dayRate, workingDays,#experience);
      this.salary = salary;
    }

  salaryCount() {
     console.log("Salary: " + dayRate*workingDays*(1.5/100));
  }
}

let prs = new Person("Ivan", 200);
prs.showSalaryWithExperience();
//console.log(prs.salary);
 

let std = new Student("Nikita", 150);
std.showSalaryWithExperience();
 

let std2 = new Student("Vasyl", 250);
std2.showSalaryWithExperience();
 

function compareItem(a, b){
        // a should come before b in the sorted order
        if(a.salary > b.salary){
                return -1;
        // a should come after b in the sorted order
        }else if(a.salary < b.salary){
                return 1;
        // and and b are the same
        }else{
                return 0;
        }
}

var persons = [std, std2];
console.log(JSON.stringify(persons.sort(compareItem)));


