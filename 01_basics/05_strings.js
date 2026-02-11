 const name ="Anjali";
 const repoCount = 50;
 //console.log(name + repoCount+"Value");

 console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);// String interpolation

 const gameName = new String ("Anjali-Hanumant-Lad"); // another way of defining string

 console.log(gameName[0]);
 
 console.log(gameName.__proto__);

 // String methods
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('a'));

  const newString = gameName.substring(1,4);
  console.log(newString);

  const anotherString =  gameName.slice(-9,4);// can give -ve values in slice()
  console.log(anotherString);

  const newStringOne = "   Anjali   ";
  console.log(newStringOne);
  console.log(newStringOne.trim());
  
  const url ="https://anjali.com/anjali%20lad";
  
  console.log(url.replace('%20','-'));

  console.log(url.includes('anjali'));
  console.log(url.includes('rima'));

  console.log(gameName.split('-'));
  
  
  
  
 
 
 
 
 