//  singleton  
// constructor se ha hamesha singleton bnega 
// literalls jo delacred krte h toh singleton ni bnta h 
// object.create   isis method ko bolte h constructor method  baad mei discuss krege ise 




//  object literals 
//  curly braces hi object h okie 

const mySym = Symbol("key1")
// ye hamne symbol define kiya h 



const JsUser = {
    name: "Hitesh",
    "full name": "hitesh choudhary",
    [mySym]: "mykey1", // yhi pe dekh rha ho ki jo ye datatype h ye symbol ki tra use ni ho rha h 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email) // aise bi ho jata h pr aise ham define ni krte okie 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
//  ye aise hi use hota h square brackert mei kyunkiye symbol h na isliye 


JsUser.email= "hitesh@chatgpt.com" // u can change this easily email 
// Object.freeze(JsUser)// isse freeze ho jata h object kuch change ni ho payega 

JsUser.email = "hitesh@microsoft.com" // ye change ni hoga 
// console.log(JsUser);


// Functions bi dalke dekhte h 
 JsUser.greeting = function(){
    console.log("Hello JS user");
 }
 
 JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// jab bhi koi object define krna toh use this to access
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 







