function calculatorCartPrice(val1,val2,...num1){// ye d ot h rest operator ok 
    return num1
}

// console.log(calculatorCartPrice(200,400,500,1000)) // iska answer sirf 200 aayega 
// isko solve krne ke liye ek rest operator hota h 



// neeche ek object bnate h aur function mei dalte h usse dekh 

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)
// aap direct bhi username pass krsakte ho object mei aise mtlb direct object bhi pass kr sakte ho 
handleObject({
    username: "sam",
    price: 399
})

// iske andar arrays bhi pass kr sakte h jese 
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]))// same jaise upr kiya h ki seedha value dalke bhi ho sakta h 


