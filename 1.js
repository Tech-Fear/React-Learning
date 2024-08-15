var globalVar="I am global"
console.log(globalVar);
function localVar(){
  var locVar="I am local"
  console.log(locVar)
}
localVar();
// Redeclaration in variable
function abc(){
  var x=50;
  console.log(50);
}
var x=10;
abc();
console.log(x)

// Reassignment in var 

function a(){
  var y = 45;
  console.log(45)
  // reassignment 
  y=90
  console.log(y)
}
a();

// Hoisting -> a variable can be accessd before it has been declared. in js moving declaration to top
function H(){
  console.log("Before declaration ",t);
  var t=9;
  console.log("After declaration ",t);
}
H();


// let

function localLet(){
  let loclet="test"
  console.log(loclet)
}
localLet();

let glob="i am global"
console.log(glob)
function locLet(){
  let test="test"
  console.log(glob);
}
locLet();
// console.log(test)