// nested scope dekhege ismei 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }// ye chota h toh ye bde se ice cream maang sakta h okie 
    // console.log(website);// ye error de dega idk why  

    two()
}

// one()// isko uncomment krke bhi check krna 

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username +website);
    }
    // console.log(website); // ye h tera phela error okie ye scope ke hi bahar h tbi 
}
// console.log(username);// ye bhi error kyunki scopre ke bahar h ye bhi






// ***********interseting *********


console.log(addone(5))
function addone(num){
    return num + 1
}




addTwo(5)// ab error aajayega 
const addTwo = function(num){
    return num +2
}
