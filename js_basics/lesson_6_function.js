// void function
function print_hello() {
    console.log("Hello world!");
}

// void function with parameters
function print_person(name, surname) {
    console.log("Hello " + name + " " + surname);
}

// value returning function
function sum_numbers(a, b) {
    return a + b;
}

// function with default parameters
function print_person(name = "Mehmet", surname = "Ali") {
    console.log("Hello " + name + " " + surname);
}

// function arguments
function print_person(name, surname) {
    let num_args = arguments.length;
    console.log("Number of arguments: " + num_args);
}


// call functions
print_hello();
print_person("Mehmet", "Ali");
let total = sum_numbers(1, 2);

// function expressions 
const multiply_func = function (a, b) {return a * b};

// ECMAScript6 supports arrow functions
const add_func = (a, b) => a + b;
const str_func = () => "string";
const sub_func = (a, b) => {
    return a - b;
}