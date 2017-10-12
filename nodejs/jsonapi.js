var http = require("http");
var url = require("url");
function parseISOString(s) {
    if(s !== undefined){
        var b = s.split(/\D+/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    }else return 'a';
  }
http.createServer(function(req, res) {

  var parsedUrl = url.parse(req.url, true); // true to get query as object
  var queryAsObject = parsedUrl.query;

  console.log(parseISOString(queryAsObject.iso).toString())
  res.end(parseISOString(queryAsObject.iso).toString());

}).listen(8080);