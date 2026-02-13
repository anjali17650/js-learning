//Array

let arr1 = [1,2,3,4,5,6];
console.log(arr1);
console.log(arr1[4]);

const arr2 = new Array(7,4,6,76,8);
console.log(arr2[0]);

//Array methods

arr1.push(23);
arr1.push(22);
arr1.pop();

arr1.unshift(10);
arr1.shift()

console.log(arr1.includes(7));
console.log(arr1.indexOf(7));

const newArray = arr1.join();
console.log(arr1);
console.log(newArray);
console.log(typeof newArray);

//slice and splice

console.log("A ", arr1);
const myn1 = arr1.slice(1,3);
console.log(myn1);

console.log("B ",arr1);

const myn2 = arr1.splice(1,3);
console.log("C ",arr1);
console.log(myn2);

//splice manipulates the original array

const fruits = ["Apple","Mango","Grapes"];
const vegetables = ["Methi","Rajgira","Okra","Spinach"];

fruits.push(vegetables);
console.log(fruits);
/* output:- [
  'Apple',
  'Mango',
  'Grapes',
  [ 'Methi', 'Rajgira', 'Okra', 'Spinach' ]
]*/
//concat methhod
fruits.concat(vegetables);
const diet = fruits.concat(vegetables);
console.log(diet);

//Spread operator

const new_diet =[...fruits,...vegetables];
console.log(new_diet);

//flat()
const new_array = [1,23,34,[5,6,7],8,[88,56,[4,3]]];
const real_another_array = new_array.flat(Infinity);
console.log(real_another_array);

//isArray(), from(), of()
console.log(Array.isArray("Anjali"));
console.log(Array.from("Anjali"));
console.log(Array.from({name:"Anjali"}));//interesting case

let score1 = 100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1 ,score2, score3));//interesting case
