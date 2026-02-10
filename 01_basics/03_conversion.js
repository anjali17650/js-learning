let score = "33abs";
score = null;
score = undefined;
score =true;
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log( valueInNumber);

//"33" => 33
//"33abs" => NaN
//true =>1; false =>0

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" =>false
//"Anjali" =>true

let someNumber = 33;
let stringNumber =String(someNumber);
console.log(stringNumber); 
console.log( typeof stringNumber); 

// ***********************Operations*************************

let value = 3;
let negValue = -value;
console.log(negValue);
console.log(4+2);
console.log(4-2);
console.log(4*2);
console.log(4/2);
console.log(4**2);
console.log(4%2);

let str1 = "Hello";
let str2 = "Anjali";
let str3 = str1+ str2;
console.log(str3);

console.log("1"+2);//doesn't add =>12
console.log(1+"2");//doesn't add =>12
console.log("1"+2+2);//it gives 122
console.log(1+2+"2");//it gives 32
//instead use parenthesis
console.log((1+2)*4);

console.log(+true);//returns 1
//console.log(true+);//gives error
console.log(+"");//returns 0

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);








