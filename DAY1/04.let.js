//2- let datatype; ---> can be reassigned but cannot be redeclared in the same scope

let a=10;
let b=20;

function hello(){
    let m=10;
    // let m=20; this line gives the error because we cannot redeclare the variable in the same scope
    console.log(m);
}

function hello1(){
    let m=20;
    console.log(m);
}

let name = "Jyothi Siva Naga";
let age = 20;

age = 27;

console.log(`My name is ${name} and I am ${age} years old.`);