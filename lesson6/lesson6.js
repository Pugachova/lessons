//Task 1
/*
let elem = document.getElementById('test');
elem.innerHTML = 'Last';
 
let elem2 = document.body.children[0];
elem2.innerHTML = 'Last';

let elem3 = document.body.firstElementChild;
elem3.innerHTML = 'Last';

let elem4 = document.getElementsByTagName('div')[0];
elem4.innerHTML = 'Last';   */

//Task 2


var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
 }

span.onclick = function () {
    modal.style.display = "none";
 }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}   



//Task 3

var elems = document.querySelectorAll("#text p");
 
for (var i = 0; i < elems.length; i++) {
    document.write("Selector text  " + i + ": " + elems[i].innerText + "<br/>");
}

 // або
//var elements = document.querySelectorAll('selector');
/*var y = document.querySelectorAll("p");
document.getElementById("text").innerHTML = 
'Selector text 0: ' + y[0].innerHTML;
var x = document.querySelectorAll("p");
document.getElementById("text").innerHTML = 
'Selector text 1: ' + y[1].innerHTML;
var c = document.querySelectorAll("p");
document.getElementById("text").innerHTML = 
'Selector text 2: ' + y[2].innerHTML;  */

//Task 4

var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
 }

span.onclick = function () {
    modal.style.display = "none";
 }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}   

/*
// Get the ul element
let list = document.querySelector('#madalwin');
// Create new list item
let newItem = document.createElement('li');
newItem.textContent = '1';
// Add our new item to the end of the list
list.appendChild(newItem);
let newItem2 = document.createElement('li');
newItem2.textContent = '5';
list.appendChild(newItem2);
let newItem3 = document.createElement('li');
newItem3.textContent = '2';
list.appendChild(newItem3);
let newItem4 = document.createElement('li');
newItem4.textContent = '4';
list.appendChild(newItem4);
let newItem5 = document.createElement('li');
newItem5.textContent = '3';
list.appendChild(newItem5);

*/
/*
let ul = document.getElementsByTagName('ul')[0];
let list = document.querySelector('#madalwin');
let elem1 = ul.children[0];
list.appendChild(elem1);
let elem2 = ul.children[3];
list.appendChild(elem2);
let elem3 = ul.children[0];
list.appendChild(elem3);
let elem4 = ul.children[1];
list.appendChild(elem4);
let elem5 = ul.children[0];
list.appendChild(elem5);
*/

//Task 5

var tag = document.getElementsByTagName('h1')[0];
tag.style.backgroundColor = 'green';
	
var p1 = document.body.getElementsByTagName("p")[0];
p1.style.fontWeight = 'bold';

var p2 = document.body.getElementsByTagName("p")[1];
p2.style.color = 'red';

var p3 = document.body.getElementsByTagName("p")[2];
p3.style.textDecoration = 'underline';

var p4 = document.body.getElementsByTagName("p")[3];
p4.style.fontStyle = 'italic';

var show = document.body.getElementsByTagName("span")[0];
show.style.visibility = 'hidden';

//var myList = document.getElementById("myList").textContent;

var myList = document.getElementById("myList");//получить HTML список
myList.outerHTML;
myList.outerHTML = "Makemehorizontal!";//заменить HTML список на новый

//Task 6

function getMessage() {

	let inputs = [{"num": 1, "msg": "How old are you?"},{"num" : 2, "msg" : "Where are you live ?"}];
  inputs.forEach(function (elem) {  	
  	let msg = window.prompt(elem.msg);
    document.getElementById("input" + elem.num).value = msg;    
  });


	var tmp = document.getElementById('input2').value;
  document.getElementById('input2').value = document.getElementById('input1').value;
  document.getElementById('input1').value = tmp;

}

getMessage();

<body>
  <input type="text" id="input1" value="Text1">
  <input type="text" id="input2" value="Text2">
</body>


//Task 7

function createDom() {

	var body = document.createElement("body");
    html.appendChild(body);
  
  var main = document.createElement("main");
  
  body.appendChild(main);
  
    var div = document.createElement("div");
  
  main.appendChild(div);
  
    var p = document.createElement("p");
  
  div.appendChild(p);
    body.innerHtml = "First paragraph";
	
	
  main.classList.add("mainClass"); 
  main.classList.add("check"); 
  main.classList.add("item"); 

  div.setAttribute("id", "myDiv");

}

createDom();








