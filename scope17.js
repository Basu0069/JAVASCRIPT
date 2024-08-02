// Global and local scope 
// ismei 3 cheeze hoti h let,const ,var 
// let a = 10 
// const b = 20 
// var c = 30 

// {}--> inko bolte h scope ok

// thats why u should avoid var 

let a = 300 // ye global scope h toh mtlb a ka value 300 hi rhega 
if(true){
    let a = 10 
    const b = 20 
    var c = 30 
    console.log("INNER: ",a)
}// iske anadar jo likha h vo h block scope aur jo bahar likha h vo h global scope ok 






console.log(a);
// console.log(b);// a aur b done print ni hoge 
console.log(c);
