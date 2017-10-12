const fs = require('fs');

const filename = './io.txt';

let content = fs.readFileSync(filename,'UTF-8');
let str = content.toString();
let lines = str.split('\n').length;
console.log(lines);