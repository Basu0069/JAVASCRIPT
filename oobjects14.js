// const tinderUser = new Object() // isse new object bna diya h jo ki khali h abi 
const tinderUser = {}// ye bi same object declared krta h  pr ye non singleton object h 

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false 






// console.log(tinderUser);

// ab neeche ek aur object declared krege  aur neeche hi object ke andar object declared krege 


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// object combine dekh neeche 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj2 = {3: "e", 4: "f"}

// const obj3 = { obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2,obj4)//isse bi combine ho jata h smja //

const obj3= {...obj1,...obj2} // this one preferred most okie 
// console.log(obj3); //check kr lo khud 




// database se jab values aayegyi toh 
//  neeche iske andar array of objectss 




