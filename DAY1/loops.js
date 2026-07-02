console.log(`printing 1 to 10`);

for(let i=1;i<=10;i++){
    console.log(i)
}

console.log(`printiing from 10 to 1`);
for( let i=10;i>0;i--){
    console.log(i);
}


console.log("sum of n number where n = 5");
let sum =0;
for(let i=1;i<=5;i++){
    sum+=i
}
console.log(`sum is ${sum}`);   

console.log("multiplication table of 5");

for(let i=1;i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`);

}

console.log("factorial of 5");
let fact = 1;
for(let i=1;i<=5;i++){
    fact*=i;
}
console.log(`factorial is ${fact}`);

console.log("fibonacci series of 5");
let a=0;
let b=1;
console.log(a);
console.log(b);
for(let i=0;i<3;i++){
    let c=a+b;
    console.log(c);
    a=b;
    b=c;
}
console.log("prime number check");
let n = 7;
let isPrime = true;         
 if(n<=1){
    isPrime = false;
 }else{
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            isPrime = false;
            break;
        }
    }
 }
 console.log(`${n} is ${isPrime ? 'a prime' : 'not a prime'} number`);


 console.log("reverse of a number");
 let num = 123;
 let reverse = 0;
 while(num>0){
    reverse = reverse*10 + num%10;
    num = Math.floor(num/10);
 }
 console.log(`reverse is ${reverse}`);