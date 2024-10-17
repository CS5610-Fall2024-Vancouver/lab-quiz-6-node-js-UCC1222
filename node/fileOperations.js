const fs = require('fs');

// Refactor writeFilePromise function to return a Promise
const writeFilePromise = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('userData.txt', 'Hello, this is a test message!', (err) => {
            if (err) {
                reject(err); // Reject the Promise with an error
            } else {
                resolve(); // Resolve the Promise if successful
            }
        });
    });
};

// Refactor readFilePromise function to return a Promise
const readFilePromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('userData.txt', 'utf-8', (err, data) => {
            if (err) {
                reject(err); // Reject the Promise with an error
            } else {
                resolve(data); // Resolve the Promise with the data
            }
        });
    });
};

// Use Promises in the Execution Flow
writeFilePromise()
    .then(() => {
        console.log("Success!"); // Output after successful write
        return readFilePromise(); // Chain readFilePromise to run after writeFilePromise
    })
    .then((data) => {
        console.log("Data:", data); // Output the file content after reading
    })
    .catch((err) => {
        console.error("Error during file operations:", err); // Handle any errors
    });