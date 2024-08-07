// Javascript execution context 


// {}- code h jese 
// phele bnaega GLobal execution context 
// isko reference kr te h "this"

// sbse phele 
// * GLobal execution context j 
// * Function execution context 
// * Eval execution context 


// {} ye do phases mei run hota h 
// 1) Memory Creation Phase 
// 2) Execution Phase 



// let val1 = 10
// let val2 = 5 
// function addNum(num1,num2){
//     let total = num1 +num2 
//     return total 
// }
// let result1 = addNum(val1,val2)
// let result2= addnum(10,2)



// HOW WILL THIS EXECUTE?
// STEP1) sbse phele code global execution se run hota h (this)



// STEP2) MEmory Phase ke andar sare variables ko rakha jata h  
// jaise 
// val1 --> UNdefined 
// val2 --> UNdefined 
// // dono ke andar phele jata h undefined 
// addnum --> defination  jati h iske andar 
// result1-->undefined 
// result2-->undefined 


// Step 3 -> Execution Phase 
// ismei 
// val 1 ke andar 10 jayega 
// val 2 ke andar 5 jayega 
// aur line 3 se 6 tk koi function ni hoga 

// ab add num mei jayega aur uske andar bnega 
// new variable environment + execution thread ...ye ek new box create hua h okie 

// ab is box ke liye memory phase aur execution phase dono hoga 

// phele memory phase  
// val1 --> undefined
// val2 -->undefined
// total --> undefined 


// fir execution context hoga 
// num1 --> 10 jayegi value 
// num2 --> 5
// total --> 15 


// //  ye delete bi ho jayegi ab ho jayega ok 


// ab fir new box aayega 
// new veriable environment+ thread bneag 
// fir vhi memory phase aur execution phase 

// ab ye jo total h vo return ho jayega Global execution mei 



// // ab ek aur chiz hoti h call stack 
// // iske andar 
// sbse phele aayeag 
// GLobal execution 
// fir ek one mthod h, two , three ye teeno method h 

// ab one jayega execute hoga fir bahar aajayega 
// same for others 

// complexity pta kb aayegi 
// jab aapne one(), two(),three(), teeno ko bula lo ek sath 
// tb aayegi complexity ki sbse phele konsa bahar aayega 

// YAHa pr LIFO type concept chlta h 
// last in first out 



function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}

one()
two()
three()

// INorder to understand this you hv to open it up on console okie 
// ok 
 
