// Protype based inheritance - Inherit from prototype object
const  Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}


const nafees = new Person ("Nafees Bin Zafar", 41, "Software engineer");
console.log(nafees);
console.log(nafees.nationality);

// Adding new property "Nationality" in the Person constructor using Prototype object
Person.prototype.nationality = "Bangladeshi";

// Creating new person object
const mustafa = new Person ("Mustafa Monwar", 67, "Puppet Artist");
console.log(mustafa);
// Accessing property (variable) from prototype object chain
console.log(mustafa.nationality);

// Adding new methode "Birth Year" using prototype in the Person constructor
Person.prototype.birthYear = function(){
    const birthYear = 2020 - this.age;
    return birthYear;
}

// Creating new Person object
const jhankar = new Person("Jhankar Mahbub", 40, "Software Engineer");
console.log(jhankar);
// Accessing methode from prototytpe object chain
console.log(jhankar.birthYear());




// Constructor Inheritance - Inherit from other constructor(Class) function 

// Parent Constructor class
const People = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}

// Child Constructor class
const Teacher = function(name, age, job, dept){
    People.call(this, name, age, job); // Inheriting from People 
    this.dept = dept;

}

// Creating an object from Teacher constructor class
const munir = new Teacher("Munir Ahmed", 50, "Teacher", "CSE");
console.log(munir);
