//Задача 1
/*
let arr = [2, 3, 4, 5];
let result = 1;
for (let i = 0; i < arr.length; i++) {    
   result *=arr[i]; 
   
}
console.log(result);
*/
/*
let arr = [2, 3, 4, 5];
let result = 1;
let i = 0;
	 while (i < arr.length;) {
		 result *= arr[i];
	 }
	 console.log(result);
*/
//Задача 2
/*
for(let i = 0; i <= 15; i++) { 
	if(i%2 == 0){
		console.log('"'+i +" is even"+ '"');
	}else{
		console.log('"'+i +" is odd"+'"');
	}
	//console.log("Current Count : " + i);
}
*/
//Задача 3

/*Напишите функцию randArray (k), которая будет заполнять 
массив k случайными целыми числами. 
Случайные числа генерируются с диапазона 1-500*/
/* 
function randArray(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log( randArray(1, 3) );   */

/*
function randArray(k) {
  var currentIndex = k.length, temporaryValue, randomIndex;

  // Поки залишаються елементи для перетасування
  while (0 !== currentIndex) {

    // Вибрати елемент, що залишився
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // І поміняти його місцями з поточним елементом.
    temporaryValue = k[currentIndex];
    k[currentIndex] = k[randomIndex];
    k[randomIndex] = temporaryValue;
  }

  return k;
}
var arr = [];
for (var i = 0; i < 500; i++)
arr.push(i);
randArray(arr);
console.log(arr); */


function randomArray(length_of_array){
    let uppervalue = 500;
    let lowervalue = 0;
    let randomnum = Math.floor(Math.random() * (uppervalue - lowervalue + 1) + lowervalue);
    // // randArray(arr);
    // console.log(arr);
    const Randomone = [];
    for (let i = 0; i < length_of_array; i++) {
        Randomone.push(randomnum);
    }
    console.log(Randomone);
}
randomArray(5);


//Задача 4
/*
function raiseToDegree(){
let aNumber = Number(window.prompt("Enter the number"));
if (aNumber === '' || isNaN(aNumber)) {
    document.write("Incorrect Data");
}
let bNumber = Number(window.prompt("Enter the exponentiation **"));
if (bNumber === '') {
    document.write("Incorrect Data");
}
let cNumber = Number(window.prompt("Enter the number"));
if (cNumber === '' || isNaN(cNumber)) {
    document.write("Incorrect Data");
}
let result = aNumber ** cNumber;
alert(result);
}
raiseToDegree();
*/
 
 /*function raiseToDegree(a, b) {
   let result = a ** b;
   console.log(result);
}
raiseToDegree(3, 8); //6561
*/
 
 //Задача 5
 /*
function findMind(){
let numbers=[20,40,80,90,100];
numbers.sort(function(a,b){
return a-b;
});
console.log(numbers[0]);
 }
findMind([0]); */  
/*
function findMind(numbers =[]) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(numbers);
}
findMind([40,70,40,95]);
 */
 /*
 function findMind(numbers){
	return Math.min(...numbers);
}
 
console.log(findMind([70,10,90,20,5,60,1]));  */
 
 /*
 function findMind(numbers =[]) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(Math.min(...numbers));
}
findMind( [20,30,70,90]);

 */
 
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
 
 
 //Задача 6
 /*
function findUnique(value, index, self) {   //не зовсім те
    let uniquestatus='Unique';
    let notunique='Not unqiue';
   if(self.indexOf(value) == index){
       console.log(`${uniquestatus}`);
   }
   if(self.indexOf(value) !== index){
       console.log(`${notunique}`);
   }
  
   return self.indexOf(value) === index;
}


// usage example:
// var a = ['a', 1, 'a', 2, '1'];
var a = [20,30,40,40];
var unique = a.map(findUnique);

console.log(unique);*/

/*
function findUnique(nums=[]){
// let nums = [40, 50, 60, 70];
let duplicatenums = nums.filter((index, value) => {
    return nums.indexOf(index) != value;
});
console.log(duplicatenums);
if (duplicatenums.length) {
    console.log('It has duplicates all values are not unique');
} else {
    console.log('All values are unique');
}
let numset = new Set(nums);
console.log(numset);
}
findUnique([40,50,60,70,70]);
*/

 //Задача 7
 /*
var array = [1,2,3,4,5,6,7,8,9];

function getLast(array, n) {
    if (array == null) return false;
    if (n == null) return array[array.length - 1];    
  //return array.slice(Math.max(array.length - n, 0));
};
 console.log(getLast(array, 2));
 
*/
 //Задача 8
 /*
function loveLessons(){     // виводить через кому. не зрозуміла чому (треба join)
var str = 'i love java script';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
alert(arr);
} 
loveLessons();*/
/* 
function loveLessons(){
var str = "i love java script";
var first = str.slice(0, 1).toUpperCase() + str.slice(1);
alert(first);
}
loveLessons();
 */
 /*
var str = "i love java script";  
function capitalize(str) {
return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})  //Взять все символы без пробелов (\ S), стоящие в начале строки (^) или после любого символа пробела (\ s) и преобразовать их в верхний регистр (toUpperCase)
}
document.writeln(capitalize(str));
 */
 /*
function loveLessons(){ 
let str = 'i love java script';
// Разобьем строку в массив слов:
let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
	// Увеличим регистр каждого слова:
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}

// Сольем массив обратно в строку:
let result = words.join(' ');

console.log(result); // выведет 'Word1 Word2 Word3'
 }
 loveLessons();
 */

 




