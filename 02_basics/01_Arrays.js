//Array

let arr1 = [1,2,3,4,5,6];
// console.log(arr1);
// console.log(arr1[4]);

const arr2 = new Array(7,4,6,76,8);
//console.log(arr2[0]);

//Array methods

// arr1.push(23);
// arr1.push(22);
// arr1.pop();

// arr1.unshift(10);
// arr1.shift()

// console.log(arr1.includes(7));
// console.log(arr1.indexOf(7));

// const newArray = arr1.join();
// console.log(arr1);
// console.log(newArray);
// console.log(typeof newArray);

//slice and splice

console.log("A ", arr1);
const myn1 = arr1.slice(1,3);
console.log(myn1);

console.log("B ",arr1);

const myn2 = arr1.splice(1,3);
console.log("C ",arr1);
console.log(myn2);

//splice manipulates the original array



