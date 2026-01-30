// random number between 0 and 1
let random = Math.random();

// pratically this function is used for random integer
function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this function is used for random float
function get_random_float(min, max) {
    return Math.random() * (max - min) + min;
}