var http = require("http");
var server = http.createServer((req, res)=>{
  console.log(`[${(new Date()).toISOString()}]` +
              `[${req.method} ${req.url}]` +
              `[${req.headers["user-agnet"]}]`);
  res.end("Hello World2");
});
server.listen(3000);