// with 2015+ EcmaScript6, JS supports object oriented programming
// creating class
class Person {

    // constructor
    constructor(name, surname) {
        // properties
        this.name = name;
        this.surname = surname;
    }

    // method
    print_name() {
        console.log(this.name);
    }
}

// class inheritance
class Employee extends Person {
    constructor(name, surname, salary) {
        super(name, surname);
        this.salary = salary;
    }
}

// creating class with static property
class Car {
    static brand = "Honda";
    static model = "Civic";
    static year = 2025;
    static color = "black";
}

// creating object
let p1 = new Person("Mehmet", "Ali");

// accessing object properties
console.log(p1.name);
console.log(p1.surname);

// accessing object methods
p1.print_name();