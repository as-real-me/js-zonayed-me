// ============== 1. Whats new? ==============
//  //Versions of javascript
//  ES5 - Supported all browsers
//  ES6 - Most loved version to developers, but not support fully on all browser yet
//  ES16, 17, 18 - Latest but don't supported by most of the browsers so can't use directly
//   Solution: Use ES5 it support by all browser but you can use ES6 eventually most of the frameworks use ES6 but you need to buddle them (convert them) to ES6 in production phase

//   ==> Whats new?
// letও constদিয়ে ভ্যারিয়েবল ডিক্লেয়ার করা
// ইফি(Immediately Invoked Function Expressions)
// টেমপ্লেট লিটারেল(Template Literal) ও স্ট্রিং মেথড
// অ্যারো ফাংশন ও ‘this’ কীওয়ার্ড
// ডি-স্ট্রাকচারিং (Destructuring)
// অ্যারে (Array) মেথড
// স্প্রেড অপারেটর(Spread Operator)
// রেস্ট(Rest) প্যারামিটার
// ডিফল্ট(Default) প্যারামিটার
// ম্যাপ(Map)
// ক্লাস(Class) এবং সাব-ক্লাস




// ============== 2. Let & Const ==============

// // Var vs Let vs Const
// // i. Behaviour difference - Assigining new value

// // Var - allow assign new value
// var name = "Ashiouzzaman"
// console.log("Name: ", name);
// name = "Real";
// console.log("Name: ", name);

// // Let - allow assign new value
// let name = "Ashiouzzaman"
// console.log("Name: ", name);
// name = "Real";
// console.log("Name: ", name);

// // Const - allow assign new value
// const name = "Ashiouzzaman"
// console.log("Name: ", name);
// name = "Real";
// console.log("Name: ", name);


// // ii. Scoping difference
// var ফাংশন স্কোপ মেইন্টেইন করে
// let ও const ব্লক(Block) স্কোপ মেইন্টেইন করে

// // Var - value of a is accessable outof function
// function es5var() {
//     if(true) {
//        var a = 5;
//     }
//     console.log('Value: ' + a);
//  }
 
//  es5var();

//  // Let - value of a is not accessable outof function
// function es5var() {
//     if(true) {
//        let a = 5;
//     }
//     console.log('Value: ' + a);
//  }
 
//  es5var();

// // Const - value of a is not accessable outof function
// function es5var() {
//     if(true) {
//        const a = 5;
//     }
//     console.log('Value: ' + a);
//  }
 
//  es5var();


// // iii. Hoisting 

// // Var - return undefined if we try to access a var variable before declaring
// console.log(aVar);
// var aVar = 'I am defined here';

// // Let - return error if we try to access a var variable before declaring
// console.log(aVar);
// let aVar = 'I am defined here';

// // Const - return error if we try to access a var variable before declaring
// console.log(aVar);
// const aVar = 'I am defined here';



// ============== 3. EFFI ==============
// effi - Immediately call the function or expression and don't let them access outside of effi

// // ES5
// (function aDemoFunc() {
//     var msg = 'Hello World';  
//     console.log(msg);
//  })();

//  aDemoFunc();
//  console.log(msg);

// // ES6
// {
//     let aFunc = function aDemoFunc() {
//         const msg = 'Hello World';  
//         console.log(msg);
//      }
//      aFunc();
// }

// aFunc();
// // console.log(msg);



// ============== 4. Template Literal & String Method ==============
// // Template Literal
// const name = "Real", age = 23, gf = true;
// console.log(`My name is ${name}, I am ${23} years old, I have a gf = ${gf}`);

// function temLitFunc(){
//     console.log(`${name}'s year of birth is: ${2020 - age}`);
// }
// temLitFunc();

// String Methods
// const testStr = "Md Ashiouzzaman Real"
// console.log(`My name starts with Md is it true? Reply: ${testStr.startsWith('Md')}, My Name includes Ashiouzzaman? Reaply: ${testStr.includes('Ashiouzzaman')}, My name ends with Real? Reply: ${testStr.endsWith("Real")}, Repeat my last name 5 times: ${"Real ".repeat(5)}`);

// ============== 5. Arrow function, Lexical 'this' keyword ==============

// ES5 Function expression
// var aFuncExp5 = function(){
//     console.log("This is a ES5 function expression!");
// }

// aFuncExp5();

// // Same function expression using arrow function in ES6
// const anArrowFunc6 = () => console.log("This is a ES6 Arrow function expression!");
// anArrowFunc6();

// const dob = [1992, 1993, 1997, 1991];

// //ES5 - map
// var currentAge5 = dob.map(function(aDobPera){
//     return 2020 - aDobPera;
// })

// console.log(currentAge5);

// // ES6 - map
// const currentAge6 = dob.map(aDobPera => 2020 - aDobPera);
// console.log(currentAge6);

// // Multiple argument
// const currentAge62 = dob.map((oneDob, index) => `${index}: ${2018 - oneDob}`);
// console.log(currentAge62);

// //Multiple line
// const currentAge622 = dob.map(oneDob => {
//     const age = 2018 - oneDob;
//        return age;
//  });

//  console.log(currentAge622);



// // // // Lexical This

// ES5
// const lex5 = {
//     aFunc: function() {
//        console.log(this);
//        return function() {
//           console.log(this);
//        }
//     }
//  }

//  lex5.aFunc()();

// //ES6
// const lex6 = {
//     aFunc: () => {
//        console.log(this);
//        return () => console.log(this);
//     }
//  }

//  lex6.aFunc()();

// ============== 6. Destructuring  ==============
// const zonayed = ['Zonayed Ahmed', 21, 'Student'];

// //ES5
// var name = zonayed[0];
// var age = zonayed[1];
// var profession = zonayed[2];

// console.log(name);
// console.log(age);
// console.log(profession);

// //ES6
// const [name6, age6, profession6] = zonayed;

// console.log(name6);
// console.log(age6);
// console.log(profession6);

// ============== 7. Array  ==============
// var numbers = [19, 23, 14, 56, 32, 65, 10, 45];
// const indexNum = numbers.findIndex(number => number === 65);
// console.log(indexNum);

// ============== 8. Spread operator  ==============

// //ES5
// var numbers = [1, 2, 3, 4];
// function calculate(a, b, c, d) {
//     console.log('Sum: ' + (a + b + c + d));
//  }
//  calculate(numbers);
//  calculate(1, 2, 3, 4);
//  calculate.apply(null, numbers)

//  // ES6
//  calculate(...numbers);

//  // ES5
//  var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
//  arrName.unshift('Shafiq');
//  console.log(arrName);
//  arrName.push('Salam')
//  console.log(arrName);


//  // ES6
//  const arrName6 = ['Bangladesh', ...arrName, 'Language']
//  console.log(arrName6);

// // ES5
// var arrOne = [0, 1, 2, 3, 4];
// var arrTwo = [5, 6, 7, 8, 9];
// arrOne = arrOne.concat(arrTwo)
// console.log(arrOne);

// // ES6
// let arrOne6 = [0, 1, 2, 3, 4];
// let arrTwo6 = [5, 6, 7, 8, 9];
// arrOne6 = [...arrOne6, ...arrTwo6]
// console.log(arrOne6);

// ============== 9. Rest perameter  ==============
// // Undefined numbers of parameter handled by arguments perameter in ES5
// function arguments5() {
//     for(var i = 0; i < arguments.length; i++) {
//        console.log('Argument passed: ' + arguments[i]);
//     }
//  }
//  arguments5("Dhaka", "Khulna", "Chittagong");

//  But arguments doesn't work in Arrow function
// const argumentsArr = () => {
//     for(var i = 0; i < arguments.length; i++) {
//        console.log('Argument passed: ' + arguments[i]);
//     }
//  }

//  argumentsArr("Dhaka", "Khulna", "Chittagong");


// // Rest perameter in ES6
// const argumentsArr6 = (...anyName) => {
//     for(var i = 0; i < anyName.length; i++) {
//        console.log('Argument passed: ' + anyName[i]);
//     }
//  }

//  argumentsArr6("Dhaka", "Khulna", "Jessore");


// //  Temparel Literel & Rest Perameter
//  const restExtra = (name, age, ...others) => {
//     console.log(`My name is ${name} and I am ${age} years old!`);
//     others.map(other => console.log(`Argument Passed: ${other}`));
//  }
//  restExtra('Zonayed Ahmed', 21, 'JavaScript', 'Chrome', 'Web Developer', 'Front End Engineer')

// ============== 10. Default perameter  ==============

// function defaultParams6(name = 'Zonayed Ahmed', age = 21) {
//     console.log('My name is ' + name + ' and I am ' + age + ' years old!');
//  }

//  defaultParams6();
//  defaultParams6('Zawad Ahmed', 1);

// ============== 11. Map  ==============
// This is all about MAP data structure which is totally new in JS and introduced in es6

// // How to define new Map data structure
// const aboutMe = new Map();
// //Set new key & value
// aboutMe.set("name", "Md Ashiouzzaman");
// console.log(aboutMe);
// // Get value
// const name  = aboutMe.get('name');
// console.log(name);
// //Check if there is some key or not in the map
// console.log(aboutMe.has('name'));
// console.log(aboutMe.has('notInThisMap'));
// // Delete any key, value pair
// aboutMe.delete('name');
// console.log(aboutMe.has('name'));

// // Set multiple key value pair using chain method
// aboutMe.set('name', 'Ashiouzzaman').set('age', 23).set('Education', 'B.Sc in CSE');
// console.log(aboutMe);
// //Clear entire map
// aboutMe.clear();
// console.log(aboutMe);
// // Sie of Map
// aboutMe.set('name', 'Ashiouzzaman').set('age', 23).set('Education', 'B.Sc in CSE');
// console.log(aboutMe.size);
// // Loop in map using forEach
// aboutMe.forEach((value, key) => console.log(`Key is: ${key}, and the value is: ${value}`));
// //Loop in Map using for..of
// for(let [key, value] of aboutMe.entries()) {
//     console.log(`Key is: ${key}, and the value is: ${value}`);
//  }




// ============== 12. Class ==============
// class Child6 {
//     constructor(name, dob) {
//        this.name = name;
//        this.dob = dob;
//     }
 
//     currentAge() {
//        console.log(`${this.name} is ${2018 - this.dob} years old!`);
//     }
//  }

//  const zawad6 = new Child6('Zawad Ahmed', 2017);
//  console.log(zawad6.name);
//  console.log(zawad6.dob);
//  zawad6.currentAge();
// ============== 13. Inheritence  ==============
// class Person{
//     constructor(name, age, profession){
//         this.name = name;
//         this.age = age;
//         this.profession = profession;
//         this.dateOfBirth = () => {
//             console.log(`${this.name} was born in ${2020 - this.age}`);
//         }
//     }
// }

// class BusinessOwner extends Person{
//     constructor(name, age, profession, companyName){
//         super(name, age, profession);
//         this.companyName = companyName;
//     }
// }

// const ritesh = new BusinessOwner('Ritesh Agarwal', 26, 'Entrepreneur', 'OYO Rooms');
// console.log(ritesh.name);
// console.log(ritesh.age);
// console.log(ritesh.profession);
// console.log(ritesh.companyName);
// ritesh.dateOfBirth();

// Making a methode private
class MakingAprivateMethode{
    constructor(text){
        this.text = text;
    }
    static privateMethode(){
        console.log("I am a private methode only my class can access me!");
        return this.text;
    }
}

const privateMeth = new MakingAprivateMethode("This is a private methode");
// Tring to access this private methode using newly created object 'privateMeth'
// console.log(privateMeth.privateMethode());
// Accessing the methode using class itself
console.log(MakingAprivateMethode.privateMethode());


// ============== 14. ES6 in all environment  ==============








