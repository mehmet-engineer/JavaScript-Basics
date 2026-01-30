// Array object
my_array = [1, 2, 3, 4, 5];

// accessing array elements
let a = my_array[0];
let b = my_array[1];
let last = my_array[len - 1];

// array length
let len = my_array.length;

// adding elements
my_array.unshift(0);
my_array.push(6);

// removing elements
my_array.shift();
my_array.pop();

// array sorting
my_array.sort();
my_array.reverse();

// searching
let id = my_array.indexOf(3);

// copy array
let copied = my_array.slice();

// array concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);

// convert to string
let str1 = my_array.join(", ");
let str2 = my_array.toString();