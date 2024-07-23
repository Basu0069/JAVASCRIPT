const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
//  array ko as a ek hi andar le lege apne smja 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);



// ab do arrays ko spread krna h toh dekh nieech 
const all_new_heros =[...marvel_heros, ...dc_heros]
// we prefer this for real 
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// ab u hv to print a single array so do these 

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



