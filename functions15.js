 
// phele function ka basic pdhege 

// function sayMyName(){
//     console.log("B");
//     console.log("A");
//     console.log("S");
//     console.log("U");
// }

// sayMyName()



// functions 


function addTwoNumbers(number1,number2){ // ye h parameters 

    console.log(number1 + number2);
}
const result = addTwoNumbers(3, 4);//  jab functions ko call krate h...jab andar no. paas krate h tb bolte h arguments
console.log("Result: ", result);// ismei toh dekhege toh undefined aayega... 


//  ye bhi ek method h likhne ka upr value ko uncomment krke dekhna oki difference smj aajayega 




function addTwoNumberss(number3,number4){ 

    let resultt= number3 + number4 
    return resultt  // ab ye jo result h iske andar kuch value hogi pakka
    console.log("Hitesh"); // ye kabhi execute ni hoga cuz tune phele upr return likh diya h tbi okie.
    // return number1 + number2   aise bi likh sakte ho aap bs likhna ho jayega 
}

const resultt=addTwoNumberss(3,2)
console.log("Result: ", resultt); 




//  new function ko call krke dikha ta hu dekh 
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage()) // ismei dikhayega ki undefined just logged in 












