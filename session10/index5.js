var http = require("http");
var url = "http://127.0.0.1:3000";
var options = {
  method: "GET"
};
var req = http.request(url, options, (res)=>{
  res.pipe(process.stdout);
});
req.end();

//server index4.js