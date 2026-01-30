// convert to number
let s1 = "1";
let s2 = 2;
let total = Number(s1) + s2;

// convert to string
let n1 = 1;
let n2 = "a";
let str_text = String(n1) + n2;

// convert to boolean
let b1 = "true";
let b2 = Boolean(b1);

// parse string to numbers
let num = "1.25";
let num_float = parseFloat(num);
let num_int = parseInt(num);

// convert object to array
let obj = {model:"suv", color:"white"};
let key_array = Object.keys(obj);
let value_array = Object.values(obj);