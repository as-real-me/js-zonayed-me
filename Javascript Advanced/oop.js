let a = 10, b = 20;
console.log("Before a: " , a, "b: ", b);
 function swap(a, b){
     console.log("First a: ", a, "b: ", b);
     let temp;
     temp = a;
     a = b;
     b = temp;
     console.log("Last a: ", a, "b: ", b);
 }

 swap(a, b);
 console.log("After: ", a , " b: ", b);