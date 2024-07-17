const name= "hitesh"
const repoCount = 50 

// console.log(name + repoCount + " Value");     // ye jo method h ye old h but it will also works but we dont do it okie 


console.log(`Hello my nam is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

// aap sb prototype ke methdo bhi use kr sakte ho jaise mei krke dikhaat hu 

console.log(gameName.length);
console.log(gameName.toUpperCase);

console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // ismei peeche se start kiya h okie smja 
console.log(anotherString); 



const newStringOne = "       hitesh         "
console.log(newStringOne);
console.log(newStringOne.trim());
// isse extra spaces hoti h na jo vo remove ho jayegyi..
// see trim mdn reference okie 


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));
// check krega ki iske andar h ye keyword ya ni 



console.log(gameName.split('-'));
// split kiya on the basisc of - 


