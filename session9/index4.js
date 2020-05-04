var fs = require("fs");
var path = require("path");

var reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
var data = "";

reader.on("data", (chunk) => {
  data += chunk;
});

reader.on("end", () =>{
  console.log(data);
});

reader.resume();