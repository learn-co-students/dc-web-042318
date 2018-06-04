//High Order functions

//Pass a func to another func
function higherOrder(func){
  console.log("inside the higher order function");
  func();
};

var subFunction = function(){
  console.log("inside the sub function");
}

higherOrder(subFunction);

//Return a function form another functions
function multipleBy(multipler){
  var multipleByNumer = function(num){
    return multipler * num;
  }
  return multipleByNumer;
}

var multiplyByTwo = multipleBy(2);
var multiplyByThree = multipleBy(3);
var multiplyByFour = multipleBy(4);

console.log(multiplyByThree(2));
console.log(multiplyByFour(2));


var obj = {
  value: function(){
    console.log("hello world");
  }
}

var exampleFunc = function(){
  console.log("example");
}

var array = [];
array.push(6);
array.push({});
array.push(exampleFunc);


var a = 1;
function aFunc(){
  var a = 2;
  console.log(a);
}
aFunc();
console.log(a); // 2, 1

var a = 1;
if(true){
  var a = 2
  console.log(a);
}
console.log(a); // 2, 2 because same variable

let b = 1;
if(true){
  let b = 2;
  console.log(b);
}
console.log(b); // 2, 1 different variables in diff scopes

let c = 1;
if(true){
  let c = 2
  c = 3
  console.log(c);
}
console.log(c); // 3, 1 can be reassigned within same scope but not redeclared

const d = 1;
if(true){
  const d = 2
  console.log(d);
}
console.log(d); // 2, 1 because different variables in diff scope
//const cannot be redeclared or reassigned within same scope
