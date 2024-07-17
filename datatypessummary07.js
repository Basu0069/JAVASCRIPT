//  Primitive--- Inka data copy krke diya hota h smja... 

//  7 types : String, Number, Boolean, null, undefined , Symbol , BigInt 

const score = 100 
const scoreValue = 100.3 

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//  ye dikhne mei toh same lg rhe h pr ni h same cuz dono alag h yhi toh symbol ka kaam h 
console.log(id === anotherId);

const bigNumber = 34566789543654n






// Reference (Non primitive)

// Array, Objects,Functions 

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}



// You can use type of inorder to find the datatype of any value 

console.log(typeof outsideTemp);
// aise aap kisi ka bhi check kr sakte ho okie 
// null ka datatype object aata h vese 

https://262.ecma-international.org/5.1/#sec-11.4.3
   
