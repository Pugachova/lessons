//Task 1
		function showWin() {
			let openTab = window.open("file:///C:/Users/alexey/Downloads/JS/js.html", "w3schools", "width=300,height=300,left=700,top=200");
			return openTab;
		}
		
		function resizeWin(openTab) {
			openTab.resizeBy(500,500);
		}
		
		function moveWin(openTab) {
			openTab.moveBy(200,200);
		}
		
		function closeWin(openTab) {
			openTab.close();
		}
		
		function win() {
			let openTab = showWin();
			setTimeout(() => {  
				resizeWin(openTab);
				setTimeout(function(){
					moveWin(openTab)
					setTimeout(function(){
					  closeWin(openTab);
					},2000);					
				},2000);								
			}, 2000);
		}

<input type="button" onclick="win();">Press</input>
//Task4

function del() {
			let select = document.getElementById("sb");
			let value = select.selectedIndex;
			if (value >= 0) {
				select.removeChild(select[value]);
			}
		}
		
	//<input type="button" onclick="del()" value="Del element"/>
	
//Task5
var isMouseOverTriggered = false;
		function mouseOver() {
			if (!isMouseOverTriggered) {
				isMouseOverTriggered = true;
				bodyObj.innerHTML += '<p>Mouse on me</p>';
			}			
		}
		
		function mouseOut() {
			if (isMouseOverTriggered) {
				isMouseOverTriggered = false;
				bodyObj.innerHTML += '<p>Mouse is not on me</p>';
			}			
		}
//Task6

	//var onresize = function() {
		   //your code here
		   //this is just an example
		   width = document.body.clientWidth;
		   height = document.body.clientHeight;
		   bodyObj.innerHTML += '<p>width: ' + width + ' height: ' + height +'</p>';
		   //alert("" + width + " " + height);
		}
		window.addEventListener("resize", onresize);
		
//Task7
	var selectCntr;
		var selectCities;
		document.addEventListener("DOMContentLoaded", function(event) { 
		  selectCntr = document.getElementById("cntr");
		  selectCities = document.getElementById("cities");
		  initCountries();
		  getCities();
		});
	
	
		var countries = ["USA","Germany","Ukraine"];
		var cities = new Map();
		cities.set("USA", ["NYC","Chicago"]); 
		cities.set("Germany", ["Berlin","Munchen"]); 
		cities.set("Ukraine", ["Kyiv","Kharkiv"]);
		
		function initCountries() {
			countries.forEach(function(elem){
				var opt = document.createElement('option');
				opt.value = elem;
				opt.innerHTML = elem;
				selectCntr.appendChild(opt);
				console.log(elem);
			});
		}
		
		function initCities(cities) {
			cities.forEach(function(elem){
				var opt = document.createElement('option');
				opt.value = elem;
				opt.innerHTML = elem;
				selectCities.appendChild(opt);
				console.log(elem);
			});
		}
		
		function getCities() {			
			selectCities.innerHTML = "";
			//console.log(cities.get(selectCntr.options[selectCntr.selectedIndex].value));
			initCities(cities.get(selectCntr.options[selectCntr.selectedIndex].value));
		}



	<select id="cntr" onchange="getCities()"></select>
	<select id="cities"></select>		
