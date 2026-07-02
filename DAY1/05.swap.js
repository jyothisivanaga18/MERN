let a = 10;
let b = 20;

console.log(`a is ${a} and b is ${b}`);

let temp = a;
a=b;
b=temp;
console.log(`a is ${a} and b is ${b}`);


[a,b] = [b,a];

console.log(`a is ${a} and b is ${b}`);
