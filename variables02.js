const accountId =14423  // const ka mtlb hota h aapne jo ek baar memory assign krdi so krdi ab change ni ho sakti 
// const keyword ko aap change ni kr sakte h okie 
let accountEmail = "basuslathia@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId =2       you cannot do this twice okie // not allowed 



//  now we try to change accountemail nd all the variables 
accountEmail="dewslathia@gmail.com"
accountPassword="212122"
accountCity="Bengaluru"
let accountState;  // jaise meinee ye term declared ni ki h ab ?
console.log(accountId);

//  agr ek sath sare print krne h toh table likha kr jaise 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


// NOTE: Prefer not to use var because of issue in block scope and functional scope 