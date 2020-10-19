//Task1 

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]   

//Task2
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names: [name1, name2, name3, name4],
ages: [age1, age2, age3, age4],} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//Task3
 var func = (...args) => {
  	return args
    	.filter(f => !isNaN(f) && f != null)
    	.reduce((a, b)  =>  a * b);
  }; 
  
function mul(f) { 
  return f; 
}

console.log("result: " + mul(func(1,2,"test", null, 5)));


//Task4 
let server = {
   data: 0,
   convertToString: function (callback) {
      callback( this.data + "" );
   }
};

let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (callback => this.result = callback);
   }
};

client.calc(123);
console.log("res: " + client.result);
console.log("type: " + typeof client.result); 


//Task5

function mapBuilder(keys, values) {
  var myMap = new Map();
	keys.forEach(k => {
    myMap.set(k, values[myMap.size]);
  });
  return myMap;

}


let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"