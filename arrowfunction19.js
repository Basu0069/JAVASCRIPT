// "this"  keyword current context ke baare mei btata h 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);// jb bhi current context ho jaise yhi curly braes ke andar tb aap this keyword use krte ho ookie.
        console.log(this);// this ne btaya aapko currrent context okie 
    }
}
// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()
// in 3tteno ko uncomment kr dena 

// console.log(this);// abhi global ke andar koi context hi ni h toh ye empty hi dikayega 







// AB ek function likhte h ham iske anadar 
// neeche aap dekhoge ki jo ye this h ye aap objects ke andar hi use kr paoge 
// aur jo ye this function h ye aap function ke andar use ni kr paoge.. 


// neeche dono ko chlakr dekh 
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// ab neeche function ko const mei dalke dekhege 

// const chai = function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()





const chai =  () => {
    let username = "hitesh"
    console.log(this);
}// ye h ab arrow function okie 
// chai()


// AB baat krte h pure arrowfunction ki ekh neeche 
// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }





// const addTwo = (num1, num2) =>  num1 + num2 


// const addTwo = (num1, num2) =>  (num1 + num2) 

const addTwo = (num1,num2) => ({username: "hitesh"})
// object ko return krne ke liye aapko usko paranthesis mei wrap krna hi pdega 

console.log(addTwo(3, 4))



// const myArray = [2,5,6,3,1]

// myArray.forEach()
// in dono ke baare mei aage discuss krege ye loop ka part h na tbi 




