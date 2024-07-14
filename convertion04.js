let score = "33abc" 
//  tu score ki andar "null" "undefined" dalkr bj=hi check kr sakta h 
//  jaise null ke andar 0 value aati h aur undefined ke andar NaN value aati h.... "True" pe value 1 aati h...."False" pe 0 aati value. 
//  isse type pta chl jayega agr koi bhi frontend se data enter kiya toh 

console.log(typeof score);
console.log(typeof(score));

// AB ham jo score value h jo ki string mei h us datatype ko ham number mei convert krege dekh niche krte h 

let valueInNumber = Number(score) 
console.log(typeof valueInNumber);

console.log(valueInNumber); // NAN a mtlb h ki not a number  dekha 


// "33" => 33 
// "33abc" => NaN 
//  true => 1; false => 0 ;


//  NEW EXAMPLE DOWN HERE 
let isLoggedIn= 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//  ye bhi convert ho jayega u can check thata okie 
//  isloggedIn...mei agr ham empty rakhe toh false rakhne 
// aur agr ham "hitesh" rakhte toh true aata output 


// 1 => true; 0=>false 
//  "" => false 
// "hitesh" => true 



let someNUmber = 33 

let stringNumber = String(someNUmber)
console.log(stringNumber);
console.log(typeof stringNumber);

//  toh ye bhi as a string output de dega aapko  okie 

