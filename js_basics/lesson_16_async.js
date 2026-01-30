// JavaScript supports Asynchronus Programming
// Javascript is single-threaded language in runtime
// You can control running flow of code with async/await keywords
// Async/Await is a modern, cleaner way to handle asynchronous code

async function print_date() {
    let date = new Date();
    console.log(date);
}

async function main() {
    await print_date();
}

main();