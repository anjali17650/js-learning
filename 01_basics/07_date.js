const myDate = new Date();

console.log(myDate);//2026-02-12T05:12:57.386Z
console.log(myDate.toString());//Thu Feb 12 2026 10:42:57 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());//2026-02-12T05:14:41.410Z
console.log(myDate.toJSON());//2026-02-12T05:16:38.771Z
console.log(myDate.toLocaleDateString());//12/2/2026
console.log(myDate.toLocaleString());//12/2/2026, 10:46:38 am
console.log(myDate.toDateString());//Thu Feb 12 2026

console.log(typeof myDate);//object
 let myCreatedDate = new Date(2026, 1 ,15);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2026 , 1, 15 , 5 , 45);
console.log(myCreatedDate.toLocaleString());

//Time

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));//when you want time in sec

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

newDate.toLocaleString('default',{
    weekday: "long",
  

});
console.log(newDate);






