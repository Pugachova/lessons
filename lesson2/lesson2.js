//let x = 1; //Задача 1
//let y = 2;
/*let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); */

 /*
let res2 = !!x + String(y)// Допишіть код, необхідно використовувати змінні x і y
//або let res2 = !!x + (y + "")
console.log(res2); // "true2"
console.log(typeof res2); // "string"  */



 /*

let res3 = !!x && !!y // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"  */

/* 

let res4 =  parseFloat("xy")// Допишіть код, необхідно використовувати змінні x і y
// або  let res4 = parseInt(Boolean(x));
console.log(res4); // NaN
console.log(typeof res4); // "number"    */

//Задача 2
/* let number = prompt('Ваше число?');
if(number % 2 == 0){
	console.log("число є парним додатним");
}
if(number % 7 == 0){
	console.log("число є кратним числу 7");
} 
 
*/

//Задача 3
/*let arr = [1, "row", true, null];
console.log(arr.length);
let userAsk = prompt('Введіть будь-який елемент масиву');
document.write(userAsk);
arr.splice(0, 1);  // починая з позиції 0, видалити 1 элемент
document.write(arr); */

// або через alert можна вивести 
/*   
let arr = [1, "row", true, null];
console.log(arr.length);
let userAsk = prompt('Введіть будь-який елемент масиву');
alert(userAsk);
arr.splice(0, 1);  // починая з позиції 0, видалити 1 элемент
alert(arr); */



//Задача 4

//let cities = ["Rome", "Lviv", "Warsaw"]; 
//alert('"'+cities[0] + '*' + cities[1] + '*' + cities[2] + '"');

//Задача 5
/*
let isAdult = prompt("Чи Вам є 18 років?");
if(isAdult >= 18){ //(isAdult > 18)
	alert("Ви досягли повнолітнього віку");
}else{
	alert("Ви ще надто молоді");
} */

//Задача 6  prompt возвращает String, поэтому нужно преобразовать к Number
/*
let a = prompt("Введіть сторону a"); //let aNumber = Number(window.prompt("Введіть сторону a")); 
if(a === '' || isNaN(a)){
	document.write("Incorrect Data");
}
let b = prompt("Введіть сторону b");
if(b === '' || isNaN(b)){
	document.write("Incorrect Data");
}
let c = prompt("Введіть сторону c");
if(c === '' || isNaN(c)){
	document.write("Incorrect Data");
}

if ( ( a > 0 ) && ( b > 0 ) && ( c > 0) && ( ( a + b > c ) && ( b + c > a ) && ( a + c > b ) ) ) {
    let p = (a + b + c)*0.5; //Вычисление полупериметра
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c)); //Вычисление площади
    //document.write("Полупериметр = " + p + "<br>");
    console.log("Площадь = " + s.toFixed(3));
  } else {
    document.write("Треугольника не существует");
  }

if(a + b + c){
	console.log("Це трикутник");
}else{
	console.log("Це прямокутник");
}

*/
//Задача 7

// так вийшло
/*
let day = new Date().getHours();
switch(day){
	case 1:
	case 2:
	case 3:
	case 4:
	document.write("Доброї ночі");
    break;
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	document.write("Доброго ранку");
    break;
	case 11:
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	 document.write("Доброго дня");
    break;
	case 17:
	case 18:
	case 19:
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	document.write("Доброго вечора");
	break;
  
  default:
    console.log("Sorry");
	break;
}
*/

/* другий варіант
let now = new Date().getHours();

if(now > 23 && now < 5) {
	document.write("Доброї ночі");
} else if (now > 5 && now < 11) {
	document.write("Доброго ранку");
}else if (now > 11 && now < 17) {
	document.write("Доброго дня");
}else if (now > 17 && now < 23) {
	document.write("Доброго вечора");
} else{
	document.write("error");
}
*/
 
  //  так не вийшло, не зрозуміла чому 
 /*let day = new Date().getHours();
switch (day) {
  case 'day > 23 && day < 5':
    document.write("Доброї ночі");
    break;
  case 'day > 5 && day < 11':
     document.write("Доброго ранку");
    break;
  case 'day > 11 && day < 17':
    document.write("Доброго дня");
    break;
  case 'day > 17 && day < 23':
    document.write("Доброго вечора");
  default:
    console.log("Sorry");
	 break;
}
 */
 //так теж не вийшло
/*let day = new Date().getHours();
switch(day){
case day > 23 && day < 5:
    document.write("Доброї ночі");
    break;

  case day > 5 && day < 11:
     document.write("Доброго ранку");
    break;
 
  case day > 11 && day < 17:
     document.write("Доброго дня");
    break;
  
  case day > 17 && day < 23:
    document.write("Доброго вечора");
	 break;
  
  default:
    console.log("Sorry");
	break;
}*/

/*також цей код можна

function dayFounder (day) {
let day = new Date().getHours();
switch (true) {
case day >=23 && day <= 5:
return "Доброї ночі";
break;
case day >=5 && day <=11:
return "Доброї ночі";
break;
case day >=11 && day <=17:
return "Доброго дня";
break;
case day >=17 && day <= 23:
return "Доброго вечора";
break;
default:
return "Sorry";
break;
}
}
console.log(dayFounder(16));  */

//Guessing game
/*
let userconfirmation = confirm('Do you want to play the game?');
if (!userconfirmation) {
    console.log('You did not become a miilionare');
}
if (userconfirmation) {
    let confirmstatus = confirm("Start a game: randomly choose a number in range from 0 to 10.\nYou have 3 attempts to guess a number.\nIf you guess number on 1-st attempt - prize is 10$,\n 2-nd attempt – 5$,\n 3-rd attempt – 2$.");
    if (confirmstatus) {
 let newnum=Number(window.prompt("Type a number"));
let rand =Math.floor(Math.random() * 5);
console.log(rand);
if(newnum===rand){
    confirm('Your prize is: $10')
}else{
    let secondguess = Number(window.prompt("Wrong guess Please try again"));
    let randtwo = Math.floor(Math.random() * 5);
    if (secondguess === randtwo) {
        confirm('Your prize is: $5');
    }else{
           let thirdguess = Number(window.prompt("Wrong guess Please try again"));
           let randthree = Math.floor(Math.random() * 5);
            if (thirdguess ===randthree) {
                confirm('Your prize is: $2');
            }else{
                  confirm('All your guesses are finished');
            }
    }
}
         

                      
                  } 
}else{
        console.log("Thank you for a game. Your prize is: ");
        confirm("Start a game: randomly choose a number in range from 0 to 10.\nYou have 3 attempts to guess a number.\nIf you guess number on 1-st attempt - prize is 20$,\n 2-nd attempt – 10$,\n 3-rd attempt – 5$.");
         let newnumtwo = Number(window.prompt("Type a number"));
         let randtwo = Math.floor(Math.random() * 5);
         console.log(randtwo);
         if (newnumtwo === randtwo) {
             confirm('You have won $10')
         } else {
             let secondguesstwo = Number(window.prompt("Wrong guess Please try again"));
             let randtwotwo = Math.floor(Math.random() * 5);
             if (secondguesstwo === randtwotwo) {
                 confirm('You have won $5');
             } else {
                 let thirdguesstwo = Number(window.prompt("Wrong guess Please try again"));
                 let randthreetwo = Math.floor(Math.random() * 5);
                 if (thirdguesstwo === randthreetwo) {
                     confirm('You have won $2');
                 } else {
                     confirm('All your guesses are finished');
                 }
             }
         }
    }

        // if(!randomnum){
        //     console.log('Thanks for playing we have a price and its ');
        // }

    // } else {


*/



/*let prize;
let n = parseInt(Math.random(0, 5)* 5);
let user = confirm("Do you want to play a game?");
   console.log(user);

if(user == false){
	confirm("You did not become a millionaire");
}
if(user == true){
confirm("Start a game: randomly choose a number in range from 0 to 10.\nYou have 3 attempts to guess a number.\nIf you guess number on 1-st attempt - prize is 10$,\n 2-nd attempt – 5$,\n 3-rd attempt – 2$.");
if(n <=5){
	if(n === '' || isNaN(n)){
	document.write("Incorrect number");
}
	let game = prompt ();
	//confirm('your number: ' + game);
	//if(Math.floor(Math.random() * 5 <=5)){
	confirm("Your prize is: 10$");
	
}else{
	console.log("Thank you for a game. Your prize is: " +prize);
	let user2 = confirm("Do you want to try again?");
	console.log(user2);

}
}
//}


*/



/*
let userconfirmation=confirm('Do you want to play the game?');
if(!userconfirmation){
    console.log("You did not become a miilionare");
}
if(userconfirmation){
  let confirmstatus =confirm("Start a game: randomly choose a number in range from 0 to 10.\nYou have 3 attempts to guess a number.\nIf you guess number on 1-st attempt - prize is 10$,\n 2-nd attempt – 5$,\n 3-rd attempt – 2$.");
  if(confirmstatus){
    let prom = Number(window.prompt("Type a number", ""));
    let randomnum = Math.random() * 5;
    let wholenumber=Math.floor(randomnum);
    console.log(wholenumber);
   if(wholenumber>0 && wholenumber<=5){
       confirm('Your prize is: $10');
   } else if (wholenumber >= 5 && wholenumber <= 10) {
        confirm('Your prize is: $5');
   }else{
       confirm('Your prize is: $2')
   }

 
}else{
     console.log("Thank you for a game. Your prize is: " + prize);
    confirm("Start a game: randomly choose a number in range from 0 to 10.\nYou have 3 attempts to guess a number.\nIf you guess number on 1-st attempt - prize is 10$,\n 2-nd attempt – 5$,\n 3-rd attempt – 2$.");
}
}

*/


//Задача 6  prompt возвращает String, поэтому нужно преобразовать к Number
/*
let aNumber = Number(window.prompt("Введіть сторону a")); //let aNumber = Number(window.prompt("Введіть сторону a")); 
if(aNumber === '' || isNaN(aNumber)){
	document.write("Incorrect Data");
}
let bNumber = Number(window.prompt("Введіть сторону b"));
if(bNumber === '' || isNaN(bNumber)){
	document.write("Incorrect Data");
}
let cNumber = Number(window.prompt("Введіть сторону c"));
if(cNumber === '' || isNaN(cNumber)){
	document.write("Incorrect Data");
}

if ( ( aNumber > 0 ) && ( bNumber > 0 ) && ( cNumber > 0) && ( ( aNumber + bNumber > cNumber ) && ( bNumber + cNumber > aNumber ) && ( aNumber + cNumber > bNumber ) ) ) {
    let p = (aNumber + bNumber + cNumber)*0.5; //Вычисление полупериметра
    let s = Math.sqrt(p * (p - aNumber) * (p - bNumber) * (p - cNumber)); //Вычисление площади
    //document.write("Полупериметр = " + p + "<br>");
    console.log("Площадь = " + s.toFixed(3));
  } else {
    document.write("Треугольника не существует");
  }

if(aNumber + bNumber + cNumber){
	console.log("Це трикутник");
}else{
	console.log("Це прямокутник");
}
*/

//wordCounter


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <div class="w-2/5 sm:w-full flex  justify-center items-center h-screen ml-24 xl:ml-0 px-4 ">
        <!-- <div>

        </div> -->
    <form action="" method="post" class="newform">
        
            <textarea rows="4" cols="50" name="body" class=" py-10 sm:px-20 sm:py-20 border border-gray-600 body pl-6 sm:pl-0" placeholder="Write here and count the words.."></textarea><br>
            
        <!-- <input type="text" id=""><br> -->
        <input class="px-4 py-1 bg-blue-400 text-white ml-8 sm:ml-0" type="submit"><br>
        <p class="para text-black text-xl font-sans pl-6"></p>
        
        <p class="wordcount text-black text-xl font-sans pl-6 "></p>
        <p class="wordcountalert text-red-600 text-xl font-sans pl-6 "></p>
    </form>
    </div>

    <script src="script.js"></script>
</body>
</html>


let form=document.querySelector('.newform');
let textbody=document.querySelector('.body');
let wordcountalert=document.querySelector('.wordcountalert');


console.log(textbody);


textbody.addEventListener('keyup',()=>{
    let bodywriting =textbody.value;
   let characterlength =textbody.value.length;


    const para = document.querySelector('.para');
  
    para.textContent = `${bodywriting}`
let wordlength=para.textContent = `${bodywriting}`;
    let newwordlength = wordlength.split( /\w+/g ).length-1;
// wordlength;
    let wordcount=document.querySelector('.wordcount');



  wordcount.textContent = `Character length is ${characterlength} and wordcount is ${newwordlength}/1000`;
    function disabletextholder(){
        
            textbody.disabled = true;
        wordcountalert.textContent = 'Sorry you have exceeded the maximum words';
        textbody.disabled = false;
     
    }
  if(newwordlength>10){
      setTimeout(()=>{
          disabletextholder();
      },500);
     
   



