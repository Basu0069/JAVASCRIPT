// Immediately Invoked Function Expressions (IIFE)
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()



(function chai(){
    // nameed IIFE
    console.log(`DB CONNECTED`);
})(); // semicolumn main h okie ye dalna hota h yaad rakhna 



( function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();


( (name) => {// unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
})('hitesh')
