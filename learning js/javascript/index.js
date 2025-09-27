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
 var  n ="car" // redeclaration accepted.
 
 console.log(n1);
 console.log(n);
      


 //2) let: 
   let num =23;
   num= 34; //reinitilisation accepted .
 //  let num =23;    //redeclaration  not accepted.
   console.log(num);
   
//  3)const:
  const c= "hello";
  // c ="world"; /reinitilisation accepted .
                      
                  // const c= "hello";//redeclaration  not accepted.
  
  console.log(c);
  console.log(c);
  console.log(c);
   
  // // scopes
  // types 
  // 1 global  
  // 2 function
  // 3 block


var globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible here
}

console.log( globalVar); // ✅ Accessible here too
 test();



//  function scope

  function myfunction() {
    var we="wertyu";
    let le=2;
    const co =3;

    console.log( we);
    console.log( le);
    console.log( co);

}
 myfunction();
 
 {
   var we="wertyu";
    let le=2;
    const co =3;

    console.log( we);
    console.log( le);
    console.log( co);
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
  console.log ( typeof bigint);
  
   
// String
  let Strings="yaswanthcse";
   let clg =`sai ganapati`;

   console.log(Strings);
   console.log(clg);
   console.log( typeof Strings);
   console.log( typeof clg);
    
  // Boolean

   let exam = true;
    console.log(exam);
     console.log( typeof exam);
     






    


      
  