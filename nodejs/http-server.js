const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    var readStream = fs.createReadStream('./io.txt');
    readStream.pipe(res);
}).listen(3000);