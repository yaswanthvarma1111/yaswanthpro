// let myImage = document.querySelector("img");

// myImage.addEventListener("click", () => {
//   let mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/photo1.avif") {
//     myImage.setAttribute("src", "images/photo2.avif");
//   } else {
//     myImage.setAttribute("src", "images/photo1.avif");
//   }
// });




// 1)variables :A variable is a named storage for data. In JS, you declare them with var, let, or const.

var n = "Yaswanth";
var n1;
console.log(n);
n1 = "varma"; //reinitilisation accepted .
var n = "car" // redeclaration accepted.

console.log(n1);
console.log(n);



//2) let: 
let num = 23;
num = 34; //reinitilisation accepted .
//  let num =23;    //redeclaration  not accepted.
console.log(num);

//  3)const:
const c = "hello";
// c ="world"; /reinitilisation accepted .

// const c= "hello";//redeclaration  not accepted.

console.log(c);
console.log(c);
console.log(c);

// // scopes
// types 
// 1 global scope  
// 2 function scope 
// 3 block scope


var globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible here
}

console.log(globalVar); // ✅ Accessible here too
test();



//  function scope     referred in notepad

function myfunction() {
  var we = "wertyu";
  let le = 2;
  const co = 3;

  console.log(we);
  console.log(le);
  console.log(co);

}
myfunction();

{
  var we = "wertyu";
  let le = 2;
  const co = 3;

  console.log(we);
  console.log(le);
  console.log(co);
}


{
  var v = "var value";
  let l = "let value";
  const c = "const value";
}

console.log(v); // ✅ "var value"
// console.log(l); // ❌ Error
// console.log(c); // ❌ Error



//  data types
//  Number >> bigint
//  String
//  Boolean
//  undefined
//  null
//  Symbol

//  Number

let numb = 23456;
console.log(numb);
let bigint = 23456789876543n;
console.log(bigint);
console.log(typeof bigint);
let s = BigInt("65432");  //  declare Bigint also  using constructor
console.log(s); // 65432n



// String
let Strings = "yaswanthcse";
let clg = `sai ganapati`;  // string ``

console.log(Strings);
console.log(clg);
console.log(typeof Strings);
console.log(typeof clg);

// Boolean

let exam = true;
console.log(exam);
console.log(typeof exam);

//null
let nn = null;
console.log(nn);
console.log(typeof nn);

// undifined  = means u r not assigining value 

let und;
console.log(und);
  
//symbol :













//non-premitive datatype   1) object
//  Object:{key:value,
// function()

//  }

//object
let car = {
  model: `tatasafari`,
  fuelType: `petrol`,
  color: `black`,
  milage: 15,
  price: 20,//in lakhs
  start: function () {
    console.log("hello" + "  :" + this.model);
  }

}
console.log(car.model,
  "fuelType:", car.fuelType, car.color, car.milage, car.price,);
car.start();


let car2 = {
  model: `nexon`,
  fuelType: `ev`,
  color: `red`,

  price: 25,//in lakhs
  start: function () {                                        //
    console.log("hello" + "  :" + car2.model);
  }

}
console.log(car2.model,
  "fuelType:", car2.fuelType, car2.color, car2.milage, car2.price,);
car2.start();



// creating an object with  new object()

let bus = new Object();
bus.source = "vizag";
bus.destination = "hyd";
bus.number = 2345;
bus.timings = function () {
  console.log(   "bus",bus[`number`], "started from", bus[`source`], "at 6pm  and reached ", bus[`destination`], "at 8 am");
}
bus.timings();
// console.log(Object.keys(bus));
   
// Write, Edit and Run your Javascript code using JS Online Compiler
let buses={
  source:"akp",
  destination:`gwk`,
  stop:function(){
    console.log("hello bus " );
  }
}
console.log(buses[`source`]);
buses.stop();




//symbol are uni
// let sys= Symbol(" hello");
// let sys1= Symbol("hello");

// console.log(sys===sys1); 


// let name = Symbol("employe");
// let employe= {
//   [name]:"yaswanth",
//   id:100,

// }

//  employe.name="raju";

// console.log(Object.getOwnPropertySymbols(employe));


let result = 0 / 0;
console.log(result); // NaN











