// array
// shallow copy-- which share the same refernece point --- mtlb sida original mei bhi change 
// deep copy--- do not share the same reference 
const myArr= [ 0, 1 , 2, 3 , 4 ,5]
const myHeors = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);




// Array methods 

// myArr.push(6)
// myArr.push(6)
// myArr.pop()// last element remove ho jayega isse 

myArr.unshift(9) // isse starting mie ke element add hoa jayega 
myArr.shift() // isse vo remove ho jayega 

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

console.log(myArr);



