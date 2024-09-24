// set up require variables
const target = 'HELLO WORLD';


// generate random characters
function randomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTWXYZ ';
    return chars[Math.floor(Math.random() * chars.length)];
}

// generate random string for specified length
function randomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomChar();
    }

    return result;
}