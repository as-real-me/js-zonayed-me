const add = function(a,b){
    return `Addition of ${a} and ${b} is: ${a + b}`;
}

var a  = add(1, 2);
console.log(a);

//StartsWith
const name = "Md Ashiouzzaman Real"
console.log(name.startsWith("Md"));

// EndsWith
console.log(name.endsWith("Real"));

//Includs
const str = "UIU is a top Ranking University"
console.log(str.includes("top"));

// Reapeat
const sentence = "Allah ";
// console.log(sentence.repeat(50));

// Mix
console.log(`I always pray to ${'Allah'.repeat(100)}`);