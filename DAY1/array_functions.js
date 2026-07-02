//push() -add element at the end of an array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

//pop() - remove element from the end of an array
arr.pop();
console.log(arr); // Output: [1, 2, 3]

//shift() - remove first element
arr.shift();
console.log(arr); // Output: [2, 3]

//unshift() - add element at the beginning of an array
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3]

//includes() - check if an element exists in the array
console.log(arr.includes(2)); // Output: true
console.log(arr.includes(4)); // Output: false

//indexOf() - get the index of an element in the array
console.log(arr.indexOf(2)); // Output: 1
console.log(arr.indexOf(4)); // Output: -1


//reverse() - reverse the order of elements in the array
arr.reverse();
console.log(arr); // Output: [3, 2, 1]

//sort() - sort the elements of the array
arr.sort();
console.log(arr); // Output: [1, 2, 3]

//concat() - merge two or more arrays
let arr2 = [4, 5, 6];
let mergedArr = arr.concat(arr2);
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]

//join() - join all elements of the array into a string
let joinedArr = arr.join(", ");
console.log(joinedArr); // Output: "1, 2, 3"

//map() -transform each element of the array and return a new array
let mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // Output: [2, 4, 6]

//filter() - filter elements of the array based on a condition and return a new array
let filteredArr = arr.filter(x => x > 1);
console.log(filteredArr); // Output: [2, 3]

//find() - find the first element in the array that satisfies a condition
let foundElement = arr.find(x => x > 1);
console.log(foundElement); // Output: 2

reduce() - reduce the array to a single value by applying a function to each element
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 6      