// error handling
// JavaScript Error Types:
// SyntaxError, TypeError, ReferenceError, RangeError

// try-catch
try {
    let a = 5;
    let b = 0;
    let result = a / b;
    console.log(result);
} catch (error) {
    console.log("Error: " + error.name);
    console.log("Message: " + error.message);
    console.log("Description: " + error.description);
}

// try-catch-finally
try {
    let result = 5 / 0;
} catch (error) {
    console.log("Error: " + error.name);
} finally {
    console.log("Always finally executed.");
}

// throwing error
try {
    let a = 1;
    
    if (a < 0) {
        throw new Error("Number must be greater than zero.");
    }

    if (a > 10) {
        throw new Error("Number must be less than 10.");
    }

} catch (error) {
    console.log("Error: " + error);
}