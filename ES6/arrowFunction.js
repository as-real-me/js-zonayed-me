// var aFunc = function(){
//     console.log("ES5 function Expression!");
// }

// aFunc();

// //ES6
// const aFun = () => console.log("An Arrow Function!");
// aFun();


// lex6 is a global Object, aFunc is a property of lex6, so when we call lex6.aFunc()() then here this = lex6 and lex6 is a global object that's why this is represent Window in the browser console
const lex6 = {
    aFunc: () => {
       console.log(this);
       return () => console.log(this);
    }
 }


 lex6.aFunc()();