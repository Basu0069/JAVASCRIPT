Javascript execution context 


{}- code h jese 
phele bnaega GLobal execution context 
isko reference kr te h "this"

sbse phele 
* GLobal execution context j 
* Function execution context 
* Eval execution context 


{} ye do phases mei run hota h 
1) Memory Creation Phase 
2) Execution Phase 



let val1 = 10
let val2 = 5 
function addNum(num1,num2){
    let total = num1 +num2 
    return total 
}
let result1 = addNum(val1,val2)
let result2= addnum(10,2)



HOW WILL THIS EXECUTE?
STEP1) sbse phele code global execution se run hota h (this)



STEP2) MEmory Phase ke andar sare variables ko rakha jata h  
jaise 
val1 --> UNdefined 
val2 --> UNdefined 
// dono ke andar phele jata h undefined 
addnum --> defination  jati h iske andar 
result1-->undefined 
result2-->undefined 


Step 3 -> Execution Phase 
ismei 
val 1 ke andar 10 jayega 
val 2 ke andar 5 jayega 
aur line 3 se 6 tk koi function ni hoga 
6:07