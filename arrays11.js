// array
// shallow copy-- which share the same refernece point --- mtlb sida original mei bhi change 
// deep copy--- do not share the same reference 
const myArr= [ 0, 1 , 2, 3 , 4 ,5]
const myHeors = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);



// Array methods 

// myArr.push(6)
// myArr.push(6)
// myArr.pop()// last element remove ho jayega isse 

// myArr.unshift(9) // isse starting mie ke element add hoa jayega 
// myArr.shift() // isse vo remove ho jayega 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// convert arraty into string 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);




// slice, splice method   

console.log("A ", myArr);

const myn1= myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2= myArr.splice(1, 3)
console.log("C ", myArr)
//  slice ke andar jo portion tha splice ka vo ud gya sara 
console.log(myn2);


 