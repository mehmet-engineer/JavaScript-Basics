// Date class
let date = new Date();

// referenced date 1 January 1970
let time = date.getTime();

// get date from your operating system
let day = date.getDate();
let year = date.getFullYear();

// month index 0-11
let month_index = date.getMonth();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let str = date.toLocaleString();

// set date
date.setFullYear(2025);
date.setMonth(12);
date.setDate(1);