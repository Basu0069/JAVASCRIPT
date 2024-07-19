// dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// khud hi run krke dekho ye sare fir smj aayeag 

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

//  jab aap commas mei likhte ho tb aapka month 0 se start hota h 
// aur jaab aap -  is mei likhte ho tb aapka month 1 se start hota h

// neeche meine likha hua h kuch patterns mei 
// let myNewDate = new Date("2023-01-14");
// let myNewDate = new Date(2023, 0, 23, 5, 3);
let myNewDate = new Date("01-14-2023");
// console.log(myNewDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// isse time stamp aajayega aur get time se vo date convert ho jaeyego time stamp mei 


// agr time ko millisecond mie krna h toh ye krte h 
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

// localeString ko aap aur customise kr sakte ho jaise dekh neeche 

newDate.toLocaleDateString('default', {
    weekday: "long"
})

