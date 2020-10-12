 //Task 1  
function isFirstUpperCase(strTest) {

	if(strTest.match("^[A-Z]") ) {
  	return "String's starts with uppercase character";
  }
  return "String's not starts with uppercase character";

}

console.log(isFirstUpperCase("r s sdf121211 afsdf"));

 //Task2   
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

console.log(validateEmail("r_s_sdf121211afsdf@test.com"));

 //Task3 
function reg(str) {
    return str.match("d([b|B]*)(d)");    
}

console.log(reg("cdbBdbsbz"));

 //Task4  
function reg(str) {
    let r = str.match("([a-zA-Z]{4}) ([a-zA-Z]{6})");  
    return r[2] + ", " + r[1];
}

console.log(reg("Java Scriptt"));

 //Task5  https://stackoverflow.com/questions/40775674/credit-card-input-validation-using-regular-expression-in-javascript

\d{4}-{1}\d{4}-{1}\d{4}-{1}\d{4}

 //Task6 
^([^-_]|[a-zA-Z0-9_]+)-{0,1}[a-zA-Z0-9_]+@[a-zA-Z0-9\.]+

9my_ma-8@gmail.com.ua

 //Task7   
function reg(str) {
		console.log((str.match("^[a-zA-Z]{1}([a-zA-Z]|[0-9]+\.*[0-9]*){1,9}") || [] ).length > 0);

	let a = [];
    let r = Array.from(str.matchAll("([0-9]+\\.*[0-9]*)"));  
    r.forEach(function(i) {
			a.push(i[0]);
	});
  return a;
}

console.log(reg("ee1.1ret34"));