//   console.log(2>1);
//   console.log(2>=1);
//   console.log(2<1);
//   console.log(2==1);
//   console.log(2!=1);

//   TRUE False mei answer de dega ye okie 


// console.log("2" > 1);
// console.log("02" > 1);
//  iska output true aayega dono ka 

console.log(null > 0); // false 
console.log(null == 0); // false 
console.log(null >= 0);// true 

// The reason is that an equality check == and comparisons > < >= work differently. 
// Comparisons convert null to a number, treating it as 0. 
// That's why (3) null >= 0 is true and (1)null > 0 is false.

console.log(undefined ==0);
console.log(undefined > 0);
console.log(undefined < 0);


// Mostly aap in cases ko avoid hi krte ho samje.. 
//  ===     Strict Check  ye tera datatype bhi check krta h okie 

console.log("2" === 2);


