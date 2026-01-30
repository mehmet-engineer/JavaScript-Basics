// to create variable, no need to use ';'
// There are 8 types of variable in JavaScript
// 1) undefined, 2) null, 
// 3) string, 4) number, 5) bigInt, 6) boolean, 
// 7) objects (map, array, date, set), 
// 8) symbol

// undefined (no assigned value yet)
// null (no value intentionally)
var a = undefined;
var counter;
var null_var = null;

// var is used before 2015
// var is global scope
// redeclaration is allowed
var b = 2;

// 2015+ feature: let, const
// let is used instead of var anymore
// let variables are defined in block scope {}
// redeclaration is not allowed
let num1=0, num2=0;
let str1 = "string";
let str2 = "string" + " " + "variable";
let flag = true;

// defining with object method using new
let my_num = new Number(1);
let my_str = new String("string");
let my_bool = new Boolean(true);

// defining with object constructor
let num = Number(1);
let str = String("string");
let bool = Boolean(true);

// dynamic variable
let my_var = 1;
my_var = "string";
my_var = true;

// number
let x = 123;
let y = 3.14;
let m = 123e5;    // 12300000
let n = 123e-5;   // 0.00123

// BigInt
let x1 = 123456789012n;
let y1 = BigInt(123456789012);

// object
let obj = {model:"suv", color:"white"};
obj.model = "sedan";
let value_array = Object.values(obj);

// array object
let arr = [1,2,3];
arr[0] = 0;
arr.push(4);
arr.pop();
let len = arr.length;

// set object
// set is a collection of unique values
// if you add equal elements, only the first one will be saved
let my_set = new Set([1,2,3]);
my_set.add(4);
my_set.delete(3);
let val_array = Array.from(my_set);

// date object
let date = new Date("2025-12-30");

// map object
let my_map = new Map();
my_map.set("key1", "value1");
my_map.set("key2", "value2");
const fruit_map = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
let val = my_map.get("apples");
let keys = my_map.keys();
let values = my_map.values();

// constant variable
const pi = 3.14;
const arr2 = ["a", "b", "c"];

// learn type of variable
let type_str = typeof(x);
alert(type_str);

// symbol
let sym = Symbol();

// multiline strings
let text =
`Hello,
 I am a multiline string.
 How are you?`;

// string variable substitution
let name = "Mehmet";
let age = 25;
let message = `My name is ${name} and I'm ${age} years old.`;