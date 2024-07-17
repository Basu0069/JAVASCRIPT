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

// https://262.ecma-international.org/5.1/#sec-11.4.3






// ===================================

// Two types of memory 

// Stack(Primitive) ismei copy milta h 
// Heap (Non-Primitive)   ismei reference miltah 


// Stack mtlb ek ke upr ek box

// heap mei ek bda box sara 

let myYoutubename = "basuslathiadotcom"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);
//  yaha pr copy gya hua h smja upr dekh sakta h tu khud hi 


// niche example di hui h ki heap (Non-Primitive) mie seedha main value uthayi hoti h 


let userOne = {
    email: "user@google.com",
    upo: "user@ybl"
}

let userTwo= userOne 

userTwo.email = "hitesh@google.com"

 
console.log(userOne.email);
console.log(userTwo.email);



   
