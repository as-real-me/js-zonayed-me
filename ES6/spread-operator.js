// ES6
const nums = [1, 2, 3, 4, 5];
function addNums(a, b, c, d, e){
    console.log(a + b + c + d + e);
}

addNums(nums); // Without spread operator
addNums(...nums) // With spread operator