var http = require('http');

var port = 8081;
const querystring = require('querystring');                                                                                                                                                                                                
const https = require('https');

var postData = querystring.stringify({
    'msg' : 'Hello World!'
});

var options = {
    hostname: 'posttestserver.com',
    port: 443,
    path: '/post.php',
    method: 'POST',
    headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Content-Length': postData.length
       }
};
  
  var req = https.request(options, (res) => {
  
    res.on('data', (chunk) => {
        console.log("Body chunk: " + chunk);
        var s = http.createServer((req,res)=>{
            res.end(chunk.toString().toUpperCase());
        });
        s.listen(port);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  
  req.write(postData);
  req.end();
