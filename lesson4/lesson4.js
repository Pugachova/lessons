//Task 1
/
function testThrow(exception){
	try{
		throw exception;
	}catch(error){
	return 'Caught ${error}';
	}
}
console.log(testThrow(5));
console.log(testThrow('Test'));
console.log(testThrow(new Error('An error happened')));   

//Task 2

function calcRectangleArea(width, height){
	let sReq = width*height;
	
	if((width<=0) || (height <=0)){
		throw new Error("Неможливо обрахувати площу");
	}
	return sReq;
}
try{
	let result = calcRectangleArea();
	console.log(result);
}catch (exeption){
	console.log(exception.name);
	console.log(exception.message);
	console.log(exception.stuck);
}

//Task 3
/*
function checkAge(){
	let age = Number(window.prompt("How old are you?"));
    
	if(age ===''){
		alert('Ви нічого не ввели');
    throw new Error("Wrong value" + age);
	}
	if(isNaN(age)){
		alert('нечислове значення');
    throw new Error("Wrong value" + age);
	}
	if(age < 14){
		alert('Ваш вік менше 14 років');
    throw new Error("Wrong value" + age);
	}

	alert('you can watch a film');
	
} 
try {
  checkAge();
} catch(e) {
  console.log(e);
}
*/

function checkAge(){
	let age = window.prompt("How old are you?");

	// https://www.freecodecamp.org/news/falsy-values-in-javascript/
	if(!age.trim()){ 
		alert('empty string'); 
		throw new Error("Wrong value" + age); 
	}

  age = Number(age);
	if(isNaN(age)){
		alert('нечислове значення');
    throw new Error("Wrong value" + age);
	}
	if(age < 14){
		alert('Ваш вік менше 14 років');
    throw new Error("Wrong value" + age);
	}

	alert('you can watch a film');
	
} 
try {
  checkAge();
} catch(e) {
  console.log(e);
}


/*   // перша спроба. не те вийшло
function checkAge(){
	let age = Number(window.prompt("How old are you?"));
	if(age === ''){
		alert('The field is empty! Please enter your age');
	}
	if(isNaN(age)){
		alert('нечислове значення');
	}
	if(age < 14){
		alert('Ваш вік менше 14 років');
	}else{
		alert('you can watch a film');
	}
} 
//checkAge();
try{
	let result = checkAge();
	console.log(result);
}catch (exeption){
	console.log(exception.name);
	console.log(exception.message);
	console.log(exception.stuck);
}


*/

//Task 5
/*  //wrong solve
function showUser(id){
	if(isNaN(id)){
		alert('нечислове значення');
    throw new Error("Wrong value" + id);
	}
	if(id < 0){
		alert('must not be negative');
    throw new Error("Wrong value" + id);
	}

  var user = {"id": id};
	console.log(user);
} 
try {
  showUser(-20);
} catch(e) {
  console.log(e);
}
function findMin() {
  let min;
    for (var i = 0; i < arguments.length; i++)
        if ( min  === undefined || min > arguments[i]) {
            min = arguments[i];
        }
    console.log(min);
    document.getElementById("header").value = "test";
    
}

  findMin(1,4,7,9, 10, 100, -4, -10);
  
  
  
 
function showUsers(ids){

  for (var i = 0; i < ids.length; i++) {
    try {
      showUser(ids[i]);
    } catch(e) {
      console.log(e);
    }
  }
} 

function showUser(id){
	if(isNaN(id)){
		alert('нечислове значення');
    throw new Error("Wrong value" + id);
	}
	if(id < 0){
		alert('must not be negative');
    throw new Error("Wrong value" + id);
	}

  var user = {"id": id};
	console.log(user);
} 
try {
      showUsers([20, -1]);
    } catch(e) {
      console.log(e);
    }
	
*/

function showUsers(ids){

  let users = [];
  ids.forEach(function(item, index, array) {
        try {
          users.push(showUser(item));
        } catch(e) {
          console.log(         e);
        }
  });
  console.log(JSON.stringify(users));
} 

function showUser(id){
	if(isNaN(id)){
		alert('нечислове значення');
    throw new Error("is not a numeric" + id);
	}
	if(id < 0){
		alert('must not be negative');
    throw new Error("negative value" + id);
	}

  var user = {"id": id};
  return user;
} 

showUsers([20, -1, 10]);	
	
	