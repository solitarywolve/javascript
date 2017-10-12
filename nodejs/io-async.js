const fs = require('fs')
const filename = './io.txt';
fs.readFile(filename,'utf8',(err,contents) => {
    console.log(contents.split('\n').length);
})