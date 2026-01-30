// JavaScript Eventhandlers

// HTML element example:
// <button id="my_button">Click me</button>

const my_button = document.getElementById("my_button");

function click_function() {
    console.log("Button clicked!");
}
my_button.addEventListener("click", click_function);

function mouse_function() {
    console.log("Mouse on button!");
}
my_button.addEventListener("mouseover", mouse_function);

// HTML element example:
// <input id="input_key" type="text" placeholder="Press a key"></input>

const input_key = document.getElementById("input_key");

input_key.addEventListener("keydown", function (event) {
    console.log("You pressed: " + event.key);
});

// removing events
my_button.removeEventListener("click", click_function);
my_button.removeEventListener("mouseover", mouse_function);