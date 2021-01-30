'use strict';

const { count } = require('console');
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let count = 0;
    let result = 0;
    const length = s.length;
    let reminder = n % length;
    for (let i = 0; i < length; i++) {
        if (s[i] == 'a') {
            count += 1;
        }
    }
    for (let j = 0; j < reminder; j++) {
        if (s[j] == 'a') {
            result += 1;
        }
    }
    return result += Math.floor(n / length) * count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
