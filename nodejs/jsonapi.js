var http = require("http");
var url = require("url");
function parseISOString(s) {
         var b = s.split(/\D+/);
         return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
   }
http.createServer(function(req, res) {

  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end(/* icon content here */);
  } else {
    var parsedUrl = url.parse(req.url, true); // true to get query as object
    var queryAsObject = parsedUrl.query;
    console.log(queryAsObject.iso)
    res.end((parseISOString(queryAsObject.iso)).toString());
  }
  

}).listen(8080);