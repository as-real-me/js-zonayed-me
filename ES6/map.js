// ES5
var ageArray = [20, 22, 24, 19];
const dob = ageArray.map(function(age){
    return 2020 - age;
})

console.log(dob);

//ES6
const dob6 = ageArray.map(age => 2020 - age);
console.log(dob6);

// Index
const currentAge62 = dob.map((oneDob, index) => `${index}: ${2018 - oneDob}`);
const ages = ageArray.map((age, index) => `${index}: ${2020 - age}`);
console.log(ages);

//