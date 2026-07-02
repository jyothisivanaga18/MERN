// .length
//. toUpperCase()
//. toLowerCase()   
// .includes()
// .join()
// .split() 

let name = "Jyothi";
console.log(`of ${name} is ${name[2]}`);
console.log(`length of ${name} is ${name.length}`);
console.log(`uppercase of ${name} is ${name.toUpperCase()}`);
console.log(`lowercase of ${name} is ${name.toLowerCase()}`);           
console.log(`does ${name} includes 'Jyo' ? ${name.includes('Jyo')}`);

console.log("reverse  of a string")
let name1 = "Hello World";
let i=0;
let j = name1.length-1;
//reverse of a string using for loop
let reverse = "";
for(let k = name1.length-1; k >= 0; k--){
    reverse += name1[k];
}
console.log(`reverse of ${name1} is ${reverse}`);  

//palindrome 
i=0;
j=name1.length-1;
isPalindrome = true;
while(i<j){
    if(name1[i] !== name1[j]){
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}
console.log(`is ${name1} a palindrome? ${isPalindrome}`);

//count vowels in a string
let str = "Hello World";
let count = 0;
for(let i=0;i<str.length;i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
       str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
        count++;
    }
}
console.log(`number of vowels in ${str} is ${count}`);

//count words in a string
let str2 = "Hello World";
let words = str2.split(" ");
console.log(`number of words in ${str2} is ${words.length}`);